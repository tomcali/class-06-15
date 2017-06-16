//IIFE da controller
(function() {
    // add alittle dependency in ur tea
    var app = angular.module('myApp', []);

    var makeDate = function() {
      //custom date maker
      var d = new Date();
      var formattedDate = "";
      formattedDate = formattedDate + (d.getMonth() + 1) + "_";
      formattedDate = formattedDate + d.getDate() + "_";
      formattedDate = formattedDate + d.getFullYear();
      return formattedDate;
    };

    app.controller('ScheduleController', ['$http', function($http) {
        //scope yo
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

        //make day data obj
        var Day = function(hoursArray, period) {
          this.day = {};
          this.makeDay = function() {
            if (period == "morning") {
              for (var h = 0; h < hoursArray.length; h++) {
                var key = am[h];
                this.day[key] = "";
              };
            } else if (period == "night") {
              for (var h = 0; h < hoursArray.length; h++) {
                var key = pm[h];
                this.day[key] = "";
              };
            };
            return this.day;
          };
        }

        var morningDay = new Day(am, "morning");
        self.day = morningDay.makeDay();
        var nightDay = new Day(am, "night");
        self.night = nightDay.makeDay();

        this.save = function() {
          var myDay = {};
          //create a full day a plan as an object to save to db
        };

        //ajax post to db
      }

      var loadPlans = function() {
          //find all the planned days from db
        }
        //load during every lanuch
      loadPlans();

      var populate = function(days) {
        //create the the array that will populate the dropdown menu
      }

      //selected item from dropdown action
      this.dropboxitemselected = function(input) {
        //when dropdown is menu is clicked display onto the screen all the plans for that day
      }

    }]);



})();
