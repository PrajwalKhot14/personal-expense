const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;


// Middlewares
app.use(cors());
app.use(express.json());


app.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})
