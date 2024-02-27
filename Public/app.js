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

//SQL
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.PORT_DB
});

connection.query(
    'SELECT * FROM `Users`',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

app.use('/',webRouter);
app.listen(port,()=>{
    console.log(`App listening in port : ${port}`)
});
