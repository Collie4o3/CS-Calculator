var express = require('express');
var CalcController = require('./CalcController');
var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

// This responds a POST request for the homepage
app.post('/add', function (req, res) {
    var result = CalcController.add(parseInt(req.body.num1), parseInt(req.body.num2), req.body.operation);
    res.sendStatus(result);
})

// This responds a POST request for the homepage
app.post('/multiply', function (req, res) {
    var result = CalcController.multiply(parseInt(req.body.num1), parseInt(req.body.num2));
    res.sendStatus(result);
})

// This responds a POST request for the homepage
app.post('/divide', function (req, res) {
    var result = CalcController.divide(parseInt(req.body.num1), parseInt(req.body.num2));
    res.sendStatus(result);
})

// This responds a POST request for the homepage
app.post('/compute', function (req, res) {
    var result = CalcController.compute(parseInt(req.body.num1), parseInt(req.body.num2), req.body.operation);
    res.sendStatus(result);
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})