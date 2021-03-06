var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var helmet = require('helmet');
var MongoStore = require('connect-mongo')(session);
var routes = require('./src/server/routes');
var secrets = require('./secrets.js');
var app = express();

/* Helmet headers */
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'MS-Paint'}));
app.use(helmet.frameguard({ action: 'sameorigin' }));

mongoose.connect(secrets.mongodb, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

/* Use sessions */
app.use(session({
  secret: secrets.sessions,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
  }),
}));

/* Use routes */
app.use(routes);

/* Serve files */
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

/* Pass all requests to index */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
