var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var appDir = path.dirname(__dirname);

app.use(express.static(appDir + '/static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(appDir + '/views/home.html');
});

app.get('/nuestra-filosofia', function(req, res) {
  res.sendFile(appDir + '/views/aboutus.html');
});

app.listen(3030);
console.log("Running at Port 3030");
