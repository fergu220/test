// create a server
// http, url, path, os
let allbooks = "['Dr. Suess', 'Blue clues', 'Paw Patrol']";

const http = require('http');

const server = http.createServer((req, res)=>{
      //DRY - Do not repeat yourself
      const endpoint = req.url;
    //landing page
    if(endpoint === '/homepage'){
      res.end('You have made it home again')  
    } else if(endpoint === '/allbooks'){
      //about page for all books
      res.end(allbooks)
    } else{
      // Page not found
      res.end('Page not Found')  
    }   
});

const port = 8989
const hostname = 'localhost'

// listen to a server, Port Number, create an endpoint
server.listen(port, hostname, ()=>{
    console.log('Server is up and Running')
}); // 127.0.0.1 can also be called localhost