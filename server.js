var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/bundle.js'));
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
