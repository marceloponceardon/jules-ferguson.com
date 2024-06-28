var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

var cvRouter = require('./routes/cv');
var contactRouter = require('./routes/contact');
var indexRouter = require('./routes/index');

// Load env vars
dotenv.config();

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/cv', cvRouter);
app.use('/contact', contactRouter);

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

// Some info
console.log('App is running in: ' + process.env.NODE_ENV + ' mode');
console.log('\tport: ' + process.env.PORT);
console.log('\tFE: ' + process.env.FRONTEND_URL);
console.log('\tEMAIL_USER: ' + process.env.EMAIL_USER);
console.log('\tEMAIL_TO: ' + process.env.EMAIL_TO);

module.exports = app;
