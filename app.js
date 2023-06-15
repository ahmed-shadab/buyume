const express = require('express')
const app = express();
const productRoute = require('./routes/product')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(productRoute)

app.listen(3000, ()=>{
    console.log('connected on port 3000');
})