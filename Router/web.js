const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController')
const path = require('path')


// router.get('/',HomeController.getHomepage);
router.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, '../Resources/Views/test.html');
    res.sendFile(filePath);
});

router.get('/User2', HomeController.getUser2);

router.get('/User1', HomeController.getUser1);

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
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;