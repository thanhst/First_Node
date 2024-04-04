const {connection,executeQuery} = require('../Config/database');

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
        'SELECT * FROM `Users` where ID = 1',
        function (err, results, fields) {
            users = results
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.send(JSON.stringify(users));
        }
      );
}
const getUser2 = async (req, res) => {
  let users = [];
  try {
      const sql = 'SELECT * FROM `Users` WHERE ID = ? AND PASSWORD = ?';
      const values = [2,1];
      const results = await executeQuery(sql, values);
      console.log(results.results); // results contains rows returned by server
      // console.log(results.fields); // fields contains extra meta data about results, if available
      res.send(JSON.stringify(results.results));
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};

const createUser = async (req, res) => {
  try {
      // Process user creation logic here
      const { email, password } = req.body;

      // Assuming you have an executeQuery function for database operations
      const sql = 'INSERT INTO `Users` (Email, Password) VALUES (?, ?)';
      const values = [email, password];

      // Execute the query
      const results = await executeQuery(sql, values);

      // Log the results (for debugging purposes)
      console.log(results);

      // You may want to handle success or failure accordingly
  } catch (error) {
      console.error(error);
      throw error; // Propagate the error to the calling function (web.js)
  }
};

const AllUser = async (req, res) => {
  try {
      // Hash password before storing it in the database for better security
      // You may use a library like bcrypt for password hashing

      const sql = 'Select * from Users';      
      const results = await executeQuery(sql);
      res.status(200).json(results.results);
      console.log(results); // results contains information about the insert operation
      // res.status(201).send('User created successfully');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};

module.exports = {getHomepage,getUser1,getUser2,createUser,AllUser};

