var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session')
var mongoose = require('mongoose');
var users = require('./routes/users');

var app = express();

//连接mongodb
mongoose.connect('mongodb://localhost:27017/lfs');
mongoose.Promise = require('bluebird');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use(session({
    secret:'lfs',
    key:'lfs',
    cookie:{ maxAge: 1000 * 60 * 3 }, //1000 * 60 * 60 * 24 * 5 = 5days / 1000 * 60 = 1min
    // store:new mongoConnect({
    //     url: 'mongodb://localhost/blog'
    // })
}))

app.use('/', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({code:10111,messgage:"unknow url"});
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({code:10100,messgage:"server error"});
});

module.exports = app;
