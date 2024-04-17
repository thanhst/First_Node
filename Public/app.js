const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
app.use(express.json());
process.env.PATH_VIEW=path.join(__dirname,'../Resources/Views');



//connect database
const {connection,executeQuery} = require('../Config/database');

// get & use webRouter;
const webService = require('../Service/webService');

// config viewEngine;
const ViewEngine = require('../Config/viewEngine');
ViewEngine(app,express);

// set public path to access file image ,...
const publicPath = path.join(process.env.APP_ROOT, 'Resources/public');
app.set('views', path.join(process.env.APP_ROOT, 'Resources/views'))
app.use(express.static(publicPath))

//get port;
const port = process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>')
// })

//SQL



// const axios = require('axios');

// app.get('/user' ,async (req, res) => {
//     try {
//         // Gọi endpoint từ userApp
//         const response = await axios.get('http://localhost:3001/user');
//         // Trả về dữ liệu từ userApp cho client
//         res.send(response.data);
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/NewUser', async (req, res) => {
//     try {
//         // Dữ liệu cần gửi trong yêu cầu POST
//         const data = {
//             email: req.body.email,
//             password: req.body.password
//         };

//         // Gọi endpoint POST từ userApp
//         const response = await axios.post('http://localhost:3001/user/NewUser', data);

//         // Trả về dữ liệu từ userApp cho client
//         res.send(response.data);
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         // console.error(error);
//         console.log('Data của cổng 2003 : ',req.body)
//         res.status(500).send('Internal Server Error');
//     }
// });
const UserRouter=require('../Router/web/userRouter')
const HomeRouter=require('../Router/web/homeRouter')
app.use('/User',UserRouter)
app.use('/',HomeRouter)
console.log(process.env.PATH_VIEW)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'../Resources/Views/404.html'));
});
app.listen(port,()=>{
    console.log(`App listening in port : ${port}`)
});
