const connection = require('../Config/database');

const getHomepage=(req,res)=>{
    let users = [];
    connection.query(
        'SELECT * FROM `Users`',
        function (err, results, fields) {
            users = results
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.send(JSON.stringify(users));
        }
      );
}
const getUser1=(req,res)=>{
    let users = [];
    connection.query(
        'SELECT * FROM `Users` where ID = 2',
        function (err, results, fields) {
            users = results
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.send(JSON.stringify(users));
        }
      );
}
module.exports = {getHomepage,getUser1};

