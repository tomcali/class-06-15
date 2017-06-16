// IIFE da controller
(function() {
  // add alittle dependency in ur tea
  var app = angular.module("myApp", []);

  var makeDate = function() {
    // custom date maker
    var d = new Date();
    var formattedDate = "";
    formattedDate += (d.getMonth() + 1) + "_";
    formattedDate += d.getDate() + "_";
    formattedDate += d.getFullYear();
    return formattedDate;
  };

  app.controller("ScheduleController", ["$http", function($http) {
    // scope yo
    var self = this;
    self.day = {};
    self.night = {};
    self.dates = [];

    var am = [
      "twelve-am",
      "one-am",
      "two-am",
      "three-am",
      "four-am",
      "five-am",
      "six-am",
      "seven-am",
      "eight-am",
      "nine-am",
      "ten-am",
      "eleven-am"
    ];
    var pm = [
      "twelve-pm",
      "one-pm",
      "two-pm",
      "three-pm",
      "four-pm",
      "five-pm",
      "six-pm",
      "seven-pm",
      "eight-pm",
      "nine-pm",
      "ten-pm",
      "eleven-pm"
    ];

    // make day data obj
    var Day = function(hoursArray, period) {
      this.day = {};
      this.makeDay = function() {
        if (period === "morning") {
          for (var h = 0; h < hoursArray.length; h++) {
            var key = am[h];
            this.day[key] = "";
          }
        }
        else if (period === "night") {
          for (var h = 0; h < hoursArray.length; h++) {
            var key = pm[h];
            this.day[key] = "";
          }
        }
        return this.day;
      };
    };

    var morningDay = new Day(am, "morning");
    self.day = morningDay.makeDay();
    var nightDay = new Day(am, "night");
    self.night = nightDay.makeDay();

    this.save = function() {
      var myDay = {};
      console.log("saving plan.");
      for (var p = 0; p < 2; p++) {
        var period;
        if (p === 0) {
          period = am;
        }
        else {
          period = pm;
        }
        for (var h = 0; h < period.length; h++) {
          var myEl = angular.element(document.querySelector("#" + period[h] + "-text"));
          // console.log( myEl.val() );
          var key = period[h];
          myDay[key] = myEl.val();
        }
      }

      // console.log(myDay);
      var date = makeDate();
      var packet = {
        d: date,
        o: myDay
      };
      $http.post("/add", packet).then(function successCallback(response) {
        // show save worked!
        alert("Your plan has been saved to the database!!");
      });
    };

    var loadPlans = function() {
      console.log("loading now!");
      $http.get("/find").success(function(data) {
        // find the plans from db
        // console.log(data);
        populate(data);
      });
    };
    // load during every lanuch
    loadPlans();

    var populate = function(days) {
      console.log(days);
      var parent = self;
      for (var d = 0; d < days.length; d++) {
        parent.dates.push(days[d].dayDate);
      }
    };

    // selected item from dropdown action
    this.dropboxitemselected = function(input) {
      // console.log(input)
      var parent = self;
      for (var d = 0; d < parent.dates.length; d++) {
        if (parent.dates[d] === input) {

          console.log("found today", parent.dates[d]);
          $http.post("/grab", {
            key: input
          }).then(function successCallback(res) {
            var response = res.data.hours;
            console.log(response);
            console.log(parent.day);
            // double loop get correct text
            for (var key in response) {
              for (var prop in parent.day) {
                if (key === prop) {
                  parent.day[prop] = response[key];
                }
              }
              for (var prop in parent.night) {
                if (key === prop) {
                  parent.night[prop] = response[key];
                }
              }
            }

          });
        }
      }
    };

  }]);


}());
