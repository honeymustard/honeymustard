var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

/* Serve all files from dist folder */
app.use('/dist', express.static(path.join(__dirname, '/dist')));

/* Serve data from api */
app.get('/api/horse', function (req, res) {
    res.send('Horseey..');
});

/* The frontend will handle other requests */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
