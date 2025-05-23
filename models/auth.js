const mongoose = require('mongoose');
const date = require('date-and-time');
const now = new Date();
const endDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
const dotenv = require('dotenv');
dotenv.config();
const defaultAvatar = process.env.SERVER_ADRESS + `public/images/defaultAvatar.png`
const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: endDate
    },
    role: {
        type: String,
        require: true,
        default: "User"
    },
    avatar:{
        type: String,
        default: defaultAvatar
    },
    resetToken: String,
    resetTokenExpiration: Date
})

module.exports = mongoose.model('auth', AuthSchema);