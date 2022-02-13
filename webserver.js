const http = require('http');

const hostname = '127.0.0.1';
const port = 19680;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('minsik EE NYA?');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//   0 =<  port =< 65535  //
// node 호출 후 다시 되돌리려면 ctrl + c //