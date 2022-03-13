

var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
// 정적 파일, 수정하고 저장하면 node를 다시 실행하지 않아도 수정이 된다.
app.get('/views', function(req, res){
    res.render('temp', {time: Date(), title:'jade'} );
}) 
// template 에선 send 라 하지 않고 render 라고 한다.

// app.get('/topic', function(req, res){
//     res.send(req.query.name + ' : ' + req.query.score); 
// })

app.get('/topic/:id', function(req, res){
    var topics = [
        'JavaScript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
})
// query string


app.get('/', function(req, res){
    res.send('hello home page');
}) // 기본 페이지

app.get('/dynamic', function(req,res){
    var lis = '';
    for (var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
})
// 동적파일은 수정한 후 다시 node를 실행해야 한다.
// 그러나 순수한 html 현재 시간을 표시하는 능력이나
// 동적으로 표현할 수 있는 능력 X 

app.get('/namsan', function(req, res){
    res.send('Hi, namsan, <img src="/namsan_mountain.png">');
})

app.get('/login', function(req, res){
    res.send('<h2>Login please</h2>')
})  // (get을 통해 routing 한다.) = (get 은 router) 

app.listen(3000, function(){
    console.log('connected 3000 port');
}); // port 할당

// get, post, put, delete

