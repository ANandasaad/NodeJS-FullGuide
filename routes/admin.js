const path = require("path");
const express = require("express");

const router = express.Router();
const rootDir=require('../util/path');
const products = [];
console.log(rootDir);

router.get("/add-product", (req, res, next) => {
  //  console.log('In the middleware') // middleware

  res.sendFile(path.join(__dirname, "..","views", "add-product.html"));
  // res.render('add-product',{pageTitle:'Add Product'});
});

router.post("/add-product", (req, res, next) => {
  // console.log('In the another middleware')
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
 