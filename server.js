var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(function (req, res, next){
  var answer = req.connection;
  console.log(answer);
});

var port = process.env.PORT || 8080; // set our port

app.listen(port, function() {
  console.log('Server listening on ' + port);
});