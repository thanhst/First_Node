const express = require('express');
const router = express.Router();
const HomeController = require('../../Controllers/HomeController')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();

router.get('/',(req,res)=>{
    res.sendFile(process.env.PATH_VIEW+'/Home.html')
})

module.exports = router;