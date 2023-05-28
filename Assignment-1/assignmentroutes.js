const { buffer } = require("stream/consumers");

const assingmentHandler=(req,res)=>{
    const url = req.url;
    const method=req.method;

    if(url==='/')
    {
     res.setHeader('Content-type','text/html');
     res.write("<html>");
     res.write("<head><title>Hello , How are You!</title></head>");
     res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"/><button>create</button></form></body> ')
     res.write("</html>");
     
     return res.end();
    }
    else if(url==='/users')
    {
     res.setHeader('Content-type','text/html');
     res.write("<html>");
     res.write("<head><title>User 1</title></head>");
     res.write("</html>");
     return res.end();
    }
    if(url==='/create-user' && method==='POST')
    {
      let body=[];
      req.on('data',(chunk)=>{
         console.log(chunk);
         body.push(chunk);
      })

      return req.on("end",()=>{
         const parsedBody=Buffer.concat(body).toString();
         console.log(parsedBody);
         res.statusCode=302;
         res.setHeader('Location','/');
         return res.end();
      })

    }



}

module.exports=assingmentHandler;
