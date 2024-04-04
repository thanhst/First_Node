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
const executeQuery = (sql, values) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            if (err) {
                reject(err);
                return;
            }

            connect.query(sql, values, (queryErr, results, fields) => {
                connect.release(); // Giải phóng kết nối trở lại pool sau khi sử dụng

                if (queryErr) {
                    reject(queryErr);
                } else {
                    resolve({ results, fields });
                }
            });
        });
    });
};
module.exports = {connection,executeQuery};