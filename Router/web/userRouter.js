const express = require('express');
const router = express.Router();
const HomeController = require('../../Controllers/HomeController')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();

// router.get('/',HomeController.getHomepage);
// router.get('/', (req, res) => {
//     const filePath = path.resolve(__dirname, '../../Resources/Views/Home.html');
//     res.sendFile(filePath);
// });
router.get('/', (req, res) => {
    const filePath = process.env.PATH_VIEW+'/User.html';
    res.sendFile(filePath);
});

router.get('/User2', HomeController.getUser2);

router.get('/User1/:email', HomeController.getUser1);

router.get('/AllUser',HomeController.AllUser);

router.post('/NewUser', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate data
        if (!email || !password) {
            return res.status(400).send('Invalid request: Email and password are required.');
        }

        // Call the create user function from HomeController
        await HomeController.createUser(req, res);

        // Redirect to AllUser page
        res.redirect('/AllUser');
    } catch (error) {
        console.log(req.body)
        console.log('Lỗi body của 3001 không có gì cả')
        // console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/DeleteUser', async (req, res) => {
    try {
        // Lấy ID người dùng từ dữ liệu gửi đi
        const Email = req.body.email;
        console.log(req.body.email)
        // // Gọi hàm xóa người dùng từ UserController
        await HomeController.DeleteUser(req);

        // // Chuyển hướng hoặc trả về một phản hồi thành công tùy thuộc vào yêu cầu của bạn
        res.redirect('/AllUser'); // Ví dụ: Chuyển hướng về trang danh sách người dùng
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;