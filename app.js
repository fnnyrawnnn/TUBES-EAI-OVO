const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./app/api/users/router');
const historiesRouter = require('./app/api/histories/router');
const paymentsRouter = require('./app/api/payments/router');
const transactionsDoneRouter = require('./app/api/transactionsDone/router');
const transactionsRouter = require('./app/api/transactions/router');
const URL = '/api'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static('./public/images'));
app.use('/public/stylesheets', express.static('./public/stylesheets'));
app.use('/public/javascripts', express.static('./public/javascripts'));

app.use(`${URL}`, usersRouter);
app.use(`${URL}`, historiesRouter);
app.use(`${URL}`, paymentsRouter);
app.use(`${URL}`, transactionsDoneRouter);
app.use(`${URL}`, transactionsRouter);

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
