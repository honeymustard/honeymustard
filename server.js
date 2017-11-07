var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('The mustard sphere has you!');
});

app.listen(3000);
