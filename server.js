var express = require("express");
var app = express();

app.use(function (req, res, next){
  var IP = req.headers['x-forwarded-for'];
  var language = req.headers['accept-language'].substring(0,2);
  var regExp = /\(([^)]+)\)/;
  var software = regExp.exec(req.headers['user-agent']);
  regExp = /^.*?(?=\s\()/;
  var browser = regExp.exec(req.headers['user-agent']);
  var answer = JSON.stringify({ip: IP, language: language, software: software[1], browser: browser[0]});
  res.send(answer);
});

var port = process.env.PORT || 8080; // set our port

app.listen(port, function() {
  console.log('Server listening on ' + port);
});