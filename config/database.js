const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(process.env.APP_NAME, process.env.database_connect);
    }).catch((err) => {
        console.error('Veritabanı bağlantı hatası:', err.message);
        process.exit(1);
    });
}

module.exports = db;