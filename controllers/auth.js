const Auth = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs');
const transporter = require('../middleware/createTransport.js')
const upload = require('../middleware/MulterSettings.js');
const path = require('path');
const crypto = require('crypto');



const { resizeAndSaveImage } = require('../middleware/sharpSettings.js');


const register = async (req, res) => {
    try {
        const { username, email, password, role, secretPass } = req.body;
        const user = await Auth.findOne({ email });

        // Admin rolü kontrolü
        if (role === "Admin") {
            const secretPassword = process.env.SECRET_PASSWORD; 
            
            if (secretPass !== secretPassword) {
                return res.status(401).json({ message: `${process.env.warn_message}` });
            }
        }

        // Kullanıcı mevcut mu kontrolü
        if (user) {
            return res.status(500).json({ message: `${process.env.already_registered}` });
        }
g
        // Parola uzunluğu kontrolü
        if (password.length < 6) {
            return res.status(406).json({ message: `${process.env.password_characters}` });
        }

        // E-posta şablonu ve gönderim
        const templatePath = path.join(__dirname, 'registerSuccesful.html');
        const emailTemplate = fs.readFileSync(templatePath, 'utf-8');
        
        const info = await transporter.sendMail({
            from: '"Lita" <aziz.cakmak@hantechnology.com.tr>',
            to: email,
            subject: "Kayıt İşlemi Başarılı ✔",
            html: emailTemplate
        });

        // Şifre hashleme ve yeni kullanıcı oluşturma
        const passwordHash = await bcrypt.hash(password, 12);
        const newUser = await Auth.create({ role, username, email, password: passwordHash });

        // Token oluşturma
        const payload = {
            id: newUser.id,
            name: username,
            email: email,
            role: role
        };
        const token = jwt.sign(payload, process.env.SECRET_TOKEN);
        const messageId = info.messageId;
        
        res.status(201).json({
            status: "OK",
            newUser,
            token,
            messageId
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await Auth.findOne({email});
        if(!user){
            return res.status(500).json({message: `${process.env.not_found}`})
        }
        const comparePassword = await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return res.status(500).json({message: `${process.env.wrong_password}`})
        }
        const payload = {
            id: user.id,
            name: user.username,
            email: email
        };
        const token = jwt.sign(payload, process.env.SECRET_TOKEN);
        res.status(200).json({
            status: "OK",
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const avatarUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err });
            } else {
                let outputPathResult = '';
                if (req.file) {
                    const baseURL = process.env.SERVER_ADRESS;
                    const imagePATH =  path.join('uploads', 'userAvatarUploads', req.file.filename);
                    outputPathResult = `${baseURL}/${imagePATH}`;
                    await resizeAndSaveImage(req.file.path, imagePATH);
                }

                const { id } = req.params;
                const updateAvatar ={
                    avatar: outputPathResult
                }

                const userAvatar = await Auth.findByIdAndUpdate(
                    id,
                    updateAvatar,
                    { new: true }
                );
                res.status(201).json({ userAvatar });
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

function generateResetToken() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
  
const forgotPass = async(req,res) =>{
    const { email } = req.body;

    try {
      const user = await Auth.findOne({ email });
      console.log(user);
      if (!user) {
        return res.status(404).send('Böyle bir kullanıcı bulunamadı');
      }
  
      const resetToken = generateResetToken();
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000; // 1 saat geçerli
      await user.save();
  
    const info = await transporter.sendMail({
        from: '"Lita" <aziz.cakmak@hantechnology.com.tr>',
        to: email,
        subject: 'Password Reset',
        text: `Şifreni Degiştirmek istedigini gördük işte 1 saatlik şifre degiştirme kodun: ${resetToken}`
    });

    } catch (err) {
      res.status(500).send('Server error');
      console.log(err.message)
    }
}
const resetPass = async (req,res) =>{
    const { email, token, newPassword } = req.body;

    try {
      const user = await Auth.findOne({ email, resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
      if (!user) {
        return res.status(400).send('Kod Geçersiz');
      }

      user.password = await bcrypt.hash(newPassword, 12);
      user.resetToken = undefined;
      user.resetTokenExpiration = undefined;
      await user.save();
  
      res.status(200).send('Şifre Başarıyla Degiştirdi. Lütfen Giriş Yapınız')
  
    } catch (err) {
      res.status(500).send('Server error');
    }
}
module.exports = {register,login,avatarUpload,forgotPass,resetPass}