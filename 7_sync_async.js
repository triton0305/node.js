var fs = require('fs');

// synchronous
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);
console.log(2);

// asynchronous
console.log(3);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(4);
    console.log(data);
});
console.log(5);