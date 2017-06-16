var express = require("express");
var logger = require("morgan");

var app = express();
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
