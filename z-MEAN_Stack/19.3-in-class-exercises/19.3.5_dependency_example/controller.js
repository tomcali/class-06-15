(function() {
  var app = angular.module("myApp", []);
  app.controller("myController", ["$http", "$log", function($http, $log) {
    var self = this;
    self.message = "";

    var hello = function() {
      self.message = "Hi, this is a test message.";
      alert(self.message);
    };
    hello();

    this.bye = function() {
      alert("bye!~");
    };
    self.bye();

    $log.info(this);
    $log.info(hello);
  }]);

}());
