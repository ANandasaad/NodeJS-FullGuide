const http = require("http");
// const requestHandler = require('./routes/routes');
// const assingmentHandler=require('./Assignment-1/assignmentroutes');
const express= require('express');
const adminRoutes= require('./routes/admin');
const shopRoutes=require("./routes/shop");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).send("<h1>Page not found</h1>");
})
const server = http.createServer(app);
  // console.log(req.url, req.method,req.headers);
  // process.exit(););

server.listen(3000, () => {
  console.log("server is running at " + 3000);
});
