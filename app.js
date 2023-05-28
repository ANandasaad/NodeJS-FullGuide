const http = require("http");
const requestHandler = require('./routes');
const assingmentHandler=require('./Assignment-1/assignmentroutes');


const server = http.createServer(assingmentHandler);
  // console.log(req.url, req.method,req.headers);
  // process.exit(););

server.listen(3000, () => {
  console.log("server is running at " + 3000);
});
