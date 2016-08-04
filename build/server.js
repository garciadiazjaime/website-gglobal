var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var appDir = path.dirname(__dirname);

app.use(express.static(appDir + '/static'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(appDir + '/views/home.html');
});

app.get('/nuestra-filosofia', function (req, res) {
  res.sendFile(appDir + '/views/aboutus.html');
});

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3030;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;