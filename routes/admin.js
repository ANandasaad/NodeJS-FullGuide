
const express= require('express');

const router= express.Router();


router.get('/add-product',(req,res,next)=>{
    //  console.log('In the middleware') // middleware
     res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button>add product</button> </form>')
   })
  
   router.post('/add-product',(req,res,next)=>{
    // console.log('In the another middleware')
    console.log(req.body);
    res.redirect("/");
  
  })



module.exports=router;