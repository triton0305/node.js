var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');
app.set('views', './views');

app.listen(1225, function(){
    console.log('merry_christmas');
});

app.get('/', function(req, res){
    res.send('Hello_Christmas');
});

app.get('/topic/:id', function(req, res){
    var topic = [
        'javascript is ...',
        'python is ...',
        'C+ is ...'
    ];

    var output = `<br>
    <a href="/topic/0">javascript</a><br>
    <a href="/topic/1">python</a><br>
    <a href="/topic/2">C+</a><br><br>
    ${topic[req.params.id]}
    `;

    res.send(output);

});

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+':'+description);
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+' : '+description);
});