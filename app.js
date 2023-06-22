const http = require("http");
// const requestHandler = require('./routes/routes');
// const assingmentHandler=require('./Assignment-1/assignmentroutes');
const path=require('path');
const express= require('express');
const adminData= require('./routes/admin');
const shopRoutes=require("./routes/shop");
const bodyParser = require("body-parser");

const app =express();
app.set('view engine','ejs');

app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminData);
app.use(shopRoutes);

app.use((req,res,next)=>{
  // res.status(404).send("<h1>Page not found</h1>");
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  res.status(404).render('404',{pageTitle:'Page Not Found'});
})
const server = http.createServer(app);
  // console.log(req.url, req.method,req.headers);
  // process.exit(););

server.listen(3000, () => {
  console.log("server is running at " + 3000);
});
