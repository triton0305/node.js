const http = require('http');

const hostname = '127.0.0.1';
const port = 19680;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('minsik EE NYA?');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('minsik Aniya??');
});
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});