const multer = require('multer');
const path = require('path');
try {
    const Stroge = multer.diskStorage({
        filename: (req,file,cb) =>{
            let ext = path.extname(file.originalname)
              cb(null,Date.now() + ext)
        }
    })
    const upload = multer({
        storage: Stroge,
        fileFilter: function (req, file, callback) {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'  || file.mimetype === 'image/jpeg') {
              callback(null, true);
            } else {
              console.log('Sadece jpg, png dosyaları kabul edilir.');
              callback(new Error('Sadece jpg, png dosyaları kabul edilir.')); 
            }
          },
        limits: {
            fileSize: 1024 * 1024 * 2
        }
    }).single('image')
    module.exports = upload;
} catch (error) {
    console.log(error.message)
}