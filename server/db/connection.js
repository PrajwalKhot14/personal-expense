const mongoose = require('mongoose')

const conn = mongoose.connect(process.env.ATLAS_URI).then(db =>{
    console.log("DB Connected");
    return db;
}).catch(err =>{
    console.log("Connection error");
})

module.exports = conn;