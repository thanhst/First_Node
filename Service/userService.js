const express = require('express');
const app = express();
const userRouter = require('../Router/web/userRouter');


app.use('/user',userRouter); // Sử dụng userRouter cho đường dẫn '/user'

const userPort = process.env.USER_PORT || 3001;
app.listen(userPort, () => {
    console.log(`User Service is running on port ${userPort}`);
});
module.exports=app
