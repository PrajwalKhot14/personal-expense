const express = require('express');
const cors = require('cors');

require('dotenv').config({path:"./config.env"})

const app = express();
const port = process.env.PORT || 3001;


// Middlewares
app.use(cors());
app.use(express.json());

// using routes
app.use(require('./routes/route'));

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})
