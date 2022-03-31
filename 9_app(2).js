var express = require('express');
var app = express();

app.locals.pretty = true;

app.listen(3000, function(){
    console.log('good job');
});

app.set('view engine', 'jade');
app.set('views', './views'); // 생략하더라도 views를 기본 파일로 찾는다.


app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/static', function(req, res){
    res.send('Hi, Namsan_Tower <img src="/Namsan_Tower.jpg">');
});

app.get('/dynamic', function(req, res){
    var sentence = '';
    for(var i = 1; i > -5;i-- ){
        sentence = sentence + "<li>Hello,_Lotte_World</li>";
    };


    var time = Date();
    var output = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            ${time}
            Hello, Dynamic_World;
            <ul>
                ${sentence}
            </ul>
        </body>
    </html>`;

    res.send(output);
})

app.get('/template', function(req, res){
    res.render('temp', {time:Date(), title:'jade'});
});

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});

app.get('/topic', function(req, res){
    var topics = [
        'Javascript is ...',
        'Node.js is ...',
        'Express is ...'
    ];
    var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node.js</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
});

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/from_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+':'+description);
});