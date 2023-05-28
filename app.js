const http = require("http");
const requestHandler = require('./routes');
const assingmentHandler=require('./Assignment-1/assignmentroutes');
const express= require('express');

const app =express();

 app.use((req,res,next)=>{
   console.log('In the middleware')
   next();
 })

 app.use((req,res,next)=>{
  console.log('In the another middleware')
})

const server = http.createServer(app);
  // console.log(req.url, req.method,req.headers);
  // process.exit(););

server.listen(3000, () => {
  console.log("server is running at " + 3000);
});
