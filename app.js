var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Page routers
var indexRouter = require('./routes/index');
var contactsRouter = require('./routes/contacts');
var usersRouter = require('./routes/users');

// API routers
var apiRouter = require("./routes/api");

require('dotenv').config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Prettify for development
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Static routes
app.use('/scripts', express.static(`${__dirname}/public/scripts/`));
app.use('/styles', express.static(`${__dirname}/public/styles/`));

// Page routes
app.use('/', indexRouter);
app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);

// API routes
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
