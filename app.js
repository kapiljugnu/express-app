var express = require('express');
var app = express();

var verifyAuth = require('./middleware/verifyAuth');

app.post('/auth', function (req, res) {
    res.send({ token: 'c72cf1b0-5398-46de-96ad-86887409fdc8' });
});

app.use('/api', verifyAuth);

app.get('/api/todo', function (req, res) {
    res.send(['todo 1', 'todo 2'])
});

app.get('/api/task', function (req, res) {
    res.send(['task 1', 'task 2'])
});

app.listen(3000);