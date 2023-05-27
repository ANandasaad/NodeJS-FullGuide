const http = require('http');


const server= http.createServer((req,res)=>{
    // console.log(req.url, req.method,req.headers);
    // process.exit();
    const url = req.url;
    if(url==='/')
    {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button>Send</button></form></body>');
    res.write('</html>');
  return res.end();

    }

    //response 
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000,()=>{
    console.log('server is running at '+3000) 
});