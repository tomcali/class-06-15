(function() {
  var app = angular.module("myApp", []);
  app.controller("myController", ["$http", "$log", function($http, $log) {
    var self = this;
    self.name = "";
    self.newNew;

    this.change = function(name) {
      self.newNew = name + " cowabonga bro!!!!";
    };

  }]);

}());
