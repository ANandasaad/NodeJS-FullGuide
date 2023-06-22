const products = [];

exports.getAddProduct = (req, res, next) => {
  //  console.log('In the middleware') // middleware

  // res.sendFile(path.join(__dirname, "..","views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log('In the another middleware')
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  console.log("shop.js",products);

  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render("shop", { prods: products, docTitle: "Shop" });
};
