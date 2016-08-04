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

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3030);

var server = app.listen(app.get('port'), app.get('ipaddress'), (err) => {
  if (err) {
    console.log(err);
  }
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
