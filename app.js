var express = require('express');
var path = require('path');
var ejs = require('ejs')
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://leny32:wGHL12lg1bIxombb@smartgiveaways-0guza.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(favicon(__dirname + '/public/images/nav.svg'));
    app.use(logger('dev'));
    app.use(methodOverride());
    app.use(session({ resave: true, saveUninitialized: true, 
                      secret: 'uwotm8' }));

    // parse application/json
    app.use(bodyParser.json());                        

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // parse multipart/form-data
    app.use(multer());

    app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);

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
