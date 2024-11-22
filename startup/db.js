const mongoose = require('mongoose');
require('dotenv/config')

module.exports = function () {
    const db = process.env.DB_URL;
    mongoose.connect(db, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,    
    }).then(() => console.log(`connected to ${db}`));
}