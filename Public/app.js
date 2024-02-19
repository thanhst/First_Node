const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})
app.listen(port,()=>{
    console.log(`App listening in port : ${port}`)
});
