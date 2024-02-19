const express=require('express');
const router=express.Router();

router.get('/HelloThanh',(req,res)=>{
    res.send('<h1>Hello Thanh</h1>')
})

module.exports = router;