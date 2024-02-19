const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// get & use webRouter;
const webRouter = require('../Router/web');

// config viewEngine;
const ViewEngine = require('../Config/viewEngine');
ViewEngine(app,express);

//get port;
const port = process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>')
// })
app.use('/',webRouter);
app.listen(port,()=>{
    console.log(`App listening in port : ${port}`)
});
