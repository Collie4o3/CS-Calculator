var express = require('express');
var CalcController = require('./CalcController');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

// This responds a POST request for the homepage
app.post('/add', function (req, res) {
    CalcController.add(req.params.num1, req.params.num2);
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a POST request for the homepage
app.post('/subtract', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a POST request for the homepage
app.post('/multiply', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a POST request for the homepage
app.post('/divide', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a POST request for the homepage
app.post('/compute', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})