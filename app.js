var Companies = require('./Mongo');

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//// error handlers

// development error handler
// will print stacktrace
if ('development' === app.get('env')) {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
if ('production' === app.get('env')) {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// REST API GET for diplaying lean company on the screen
app.get('/leancompanies', function(req, res){
    Companies.LeanCompany.find(function (err, leancompanies) {
        res.send(leancompanies);
    });
});

// REST API POST for adding the lean company
app.post('/addleancompany', function (req, res) {
    var leancompany1 = new Companies.LeanCompany(req.body);
    leancompany1.save(Companies.onLeanCompanySave);
    res.send(200);
});

//module.exports = app;
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
