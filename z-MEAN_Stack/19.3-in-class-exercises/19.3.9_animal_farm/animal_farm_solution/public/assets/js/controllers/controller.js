// IIFE da controller
(function() {
  // add alittle dependency in ur tea
  var app = angular.module("myApp", []);
  // display item and post commment controller
  app.controller("FarmController", ["$http", "$log", function($http, $log) {
    // scope yo
    var self = this;
    self.workPoints;
    self.animals;
    self.friends;

    this.work = function() {
      self.workPoints++;
      $http.post("/add").then(function successCallback(response) {
        // console.log(response);
        check();
      });
    };

    var check = function() {
      $http.get("/check").success(function(data) {
        // console.log(data);
        self.workPoints = data[0].workPoints;
      });
    };
    // run check on farm bucks
    check();

    var find = function() {
      $http.get("/find").success(function(data) {
        // console.log(data);
        var myAnimals = [];
        var myFriends = [];
        for (var e = 0; e < data.length; e++) {
          // console.log(data[e]._owner, "owner");
          if (!data[e]._owner) {
            myAnimals.push(data[e]);
          }
          else {
            // console.log(data[e].name, "owned.")
            myFriends.push("../../assets/images/animals/" + data[e].name + ".png");
          }
        }
        self.animals = myAnimals;
        self.friends = myFriends;
        // console.log(self.friends);
      });
    };
    // run find animals
    find();

    // update mongodb
    this.buy = function(animal) {
      console.log(animal, "is clicked!");
      for (var a = 0; a < self.animals.length; a++) {
        if (self.animals[a].name === animal) {
          // check if u got the dough
          if (self.workPoints >= self.animals[a].cost) {
            console.log("You got it.");
            $http.post("/buy", {
              id: self.animals[a]._id
            }).then(function successCallback(response) {
              // console.log(response);
              find();
              check();
            });
          }
          else {
            console.log("You can't afford it.");
          }
        }
      }
    };

    var show = function() {
      // console.log(self.faces, "my animal");
    };
    // show animals in farm
    show();

    $log.info(this);
  }]);

}());
