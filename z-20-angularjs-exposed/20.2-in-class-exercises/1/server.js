var express = require("express");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
