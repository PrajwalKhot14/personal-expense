const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;


// Middlewares
app.use(cors());
app.use(express.json());

// using routes
app.use(require('./routes/route'));

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})
