var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressMail = require('express-mailer');

var index = require('./routes/index');
var users = require('./routes/users');
var app = express();


var app = require('express')(), mailer = require('express-mailer');

mailer.extend(app,{
              from : 'skmishra.nitdgp@gmail.com',
              host : 'smtp-pulse.com',
  secureConnection : true,
              port : 465,
   transportMethod : 'SMTP',
              auth : {
                 user : 'skmishra.nitdgp@gmail.com',
                 pass : 'CBgGDtsNYa6oq'
              }
});


// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
