const express = require('express');
const { register, login, avatarUpload,forgotPass,resetPass } = require('../controllers/auth.js');
const router = express.Router();
const { checkAuth } = require('../middleware/auth.js');
const crypto = require('crypto');
router.post('/register', register)
router.post('/login', login)
router.patch('/avatarUpload/:id', checkAuth, avatarUpload);
router.post('/forgot-password', forgotPass);
router.post('/reset-password', resetPass);
router.get('/protected', checkAuth, (req, res) => { 
try {
    const name = req.user.name
    const id = req.user.id
    const email = req.user.email
    const password = req.user.password
    const final = {id,name,email,password}
    return res.status(200).json({ message: 'OK', user: final});
} catch (error) {
    return res.status(500).json({ message: error.message }); 
}
});




module.exports = router