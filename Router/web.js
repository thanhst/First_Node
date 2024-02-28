const express=require('express');
const router=express.Router();
const HomeController = require('../Controllers/HomeController')

// router.get('/',HomeController.getHomepage);
router.get('/',(req,res)=>{
    res.send('Hello');
});

router.get('/User2',HomeController.getUser1);


module.exports = router;