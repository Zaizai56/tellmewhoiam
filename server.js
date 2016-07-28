var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res){
    var answer = req.connection;
    res.send(answer);
});

var port = process.env.PORT || 8080; // set our port

app.listen(port, function() {
  console.log('Server listening on ' + port);
});