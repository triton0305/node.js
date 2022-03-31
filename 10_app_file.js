var express = require('express');
var app = express();

app.locals.pretty = true;

app.listen(1225, function(){
    console.log('Merry_Christmas_~,~');
});

app.get('/topic/new', function(req, res){
    res.render('new');
})

app.get('/topic', function(req, res){
    res.send('Hi');
});

app.set('views', './views_file');
app.set('view engine', 'jade');
