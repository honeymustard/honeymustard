var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var api = require('./src/server/routes');
var app = express();

mongoose.connect('mongodb://honeymustard:43ApplTree@ds127126.mlab.com:27126/honeymustard', {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

/* Serve data from api */
app.use('/api', api);

/* Serve files */
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

/* Pass all requests to index */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
