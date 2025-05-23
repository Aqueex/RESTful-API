const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js');
const Test = require('./routes/testRoutes.js');
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({limit: '30mb',extended: true}));
app.use(express.urlencoded({limit: '30mb',extended: true}));

app.use('/', Auth);
app.use('/', Test);
app.use('/uploads',express.static('uploads'))
app.use('/public',express.static('public'))

db()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(process.env.APP_NAME, process.env.server_start, `${PORT}`)
})