const http = require("http");
// const requestHandler = require('./routes/routes');
// const assingmentHandler=require('./Assignment-1/assignmentroutes');
const path=require('path');
const express= require('express');
const adminRoutes= require('./routes/admin');
const shopRoutes=require("./routes/shop");
const bodyParser = require("body-parser");
const rootDir= require('./util/path');

const app =express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  // res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(rootDir,'..','views','404.html'));
})
const server = http.createServer(app);
  // console.log(req.url, req.method,req.headers);
  // process.exit(););

server.listen(3000, () => {
  console.log("server is running at " + 3000);
});
