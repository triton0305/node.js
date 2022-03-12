var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('i can do it');
})

app.get('/1225', function(req, res){
    res.send('merry christmas!');
})

app.listen(1225, function(){
    console.log('connected 1225 port, merry christmas');
})

// 0 < port < 65536