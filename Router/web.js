const express=require('express');
const router=express.Router();

router.get('/XinChao',(req,res)=>{
    res.send('<h1>Hello Thanh</h1>')
})

module.exports = router;