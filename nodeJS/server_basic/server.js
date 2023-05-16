const http = require('http');

let server = http.createServer(function(request,response){
    
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello Node.js!');

});

server.listen(8080, function(){
    console.log('Server is Running');
})
