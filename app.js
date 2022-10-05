var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongodb = require('./services/database');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var peopleRouter = require('./routes/people');
var configurationRouter = require('./routes/configuration')
var auth_tmdb_Router = require('./routes/auth_tmdb')
var certificationRouter = require('./routes/certifications')

// GiantBomb
var giantGamesRouter = require('./routes/giant_games')

// openweather.org
var weatherRouter = require('./routes/weather');

// Invoiced Generator
var invoicedRouter = require('./routes/invoiced');

// Steam API
var steam_store_router = require('./routes/steam');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movie', moviesRouter);
app.use('/people', peopleRouter);
app.use('/configuration', configurationRouter);
app.use('/auth_tmdb', auth_tmdb_Router);
app.use('/certification', certificationRouter);

// openweather router
app.use('/weather', weatherRouter);

// GiantBomb router
app.use('/giantbomb/api', giantGamesRouter);

// Invoiced router
app.use('/invoiced', invoicedRouter);

// Steam router
app.use('/steam', steam_store_router);

// Database Connection
mongodb.on('error', console.error.bind(console, 'MongoDB Connection error: '))

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
