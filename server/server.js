const express = require('express');
const cors = require('cors');

require('dotenv').config({path:"./config.env"})

const app = express();
const port = process.env.PORT || 3001;


// Middlewares
app.use(cors());
app.use(express.json());

//MongoDB connection
const con = require('./db/connection.js');

// using routes
app.use(require('./routes/route'));

con.then(db =>{
    if(!db) return process.exit(1);

    // Listen to the http server
    app.listen(port, () =>{
        console.log(`Server running on port: ${port}`)
    })

    app.on('error', err=>console.log(`Failed to connect with HTTP Server: ${err}`));

    //error in mongodb connection
}).catch(error =>{
    console.log(`Error connection: ${error}`);
})


