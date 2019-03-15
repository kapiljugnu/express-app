var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var verifyAuth = require('./middleware/verifyAuth');

app
    .set('view engine', 'ejs')
    .use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/public', express.static('assets'));


app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    console.log(req.body)
    if (!req.body.username || !req.body.password) {
        res.status("400");
        res.send("Invalid details!");
    } else {
        res.cookie('token', 'c72cf1b0-5398-46de-96ad-86887409fdc8');
        res.render('home');
    }
});

app.use('/api', verifyAuth);

app.get('/api/todo', function (req, res) {
    res.send(['todo 1', 'todo 2'])
});

app.get('/api/task', function (req, res) {
    res.send(['task 1', 'task 2'])
});

app.listen(3000);