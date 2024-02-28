const mysql = require('mysql2');
const connection = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.PORT_DB,
    waitForConnections:true,
    connectionLimit:100,
    queueLimit:0,
    connectTimeout:1000,
});
module.exports = connection;