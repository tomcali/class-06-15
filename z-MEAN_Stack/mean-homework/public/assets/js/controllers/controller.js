// IIFE da controller
(function() {
  // add alittle dependency in ur tea
  var app = angular.module("myApp", ["store-products"]);
  // no log in posting with static user

  // display item and post commment controller
  app.controller("ItemsController", ["$http", function($http) {
    // scope yo
    var self = this;
    // dom store starter states
    self.store = {
      state: false
    };
    self.loginInfo = {
      userName: "",
      userPassword: ""
    };
    self.user = {};
    self.keep = {
      state: true
    };
    self.current = {
      state: false
    };

    // get all the items data from mongodb, (this func is local to this iife)
    var findItems = function() {
      var item = self;
      // item is this
      item.stuff = [];

      // store comments
      item.myComment = {};
      // store item listing
      item.myItem = {};

      $http.get("/find").success(function(data) {
        // unpackage data from mongodb all of the items and all the comments
        var it = data.item;
        var co = data.comment;
        // console.log(it,co);

        item.stuff.gear = [];
        // gear has array of objects, each object has item info and all the comments related to that item
        for (var i = 0; i < it.length; i++) {
          // check if items has been already sold, only show if not sold
          if (!it[i].itemSold) {
            // itemObj the targeted item and create array for storing comments relating to it later
            var itemObj = {
              itemData: it[i],
              commentData: []
            };
              // gear is an array of objs each obj has one item, and all comments related to that item
            item.stuff.gear.push(itemObj);
          }
        }
        // console.log(item.stuff.gear, "stuff_dot_gear");

        // for each not sold item in gear array, check again of all it's comments, in double loop
        for (var g = 0; g < item.stuff.gear.length; g++) {
          // console.log(item.stuff.gear[g].itemData.itemName)
          // console.log(co, "co_data");

          // for each comment inside of the comments array
          for (var c = 0; c < co.length; c++) {
            // if the item name matches the comment's itemlink add the comment to the itemObj.commentData
            // inside gear array
            if (item.stuff.gear[g].itemData.itemName === co[c].itemLink) {
              item.stuff.gear[g].commentData.push(co[c]);
            }
          }
          // end up with an array of objs of one item and all comments belonging to that item
        }
        // console.log(item.stuff.gear, "stuff_dot_gear");
        // console.log(data);
      });

      // console.log(item);
    };

    // update mongodb
    this.buyItem = function(itemHash) {
      // console.log(item, "is bought!");
      var saleInfo = {
        itemId: itemHash,
        user: self.user
      };
      // update mongodb change itemSold: true
      $http.post("/buy", saleInfo).then(function successCallback(response) {
        // get new databback from db
        self.user = response.data[0];

        console.log(self.user);
        // reload page
        findItems();
      });

    };

    // thing.itemData._id, thing.itemData._owner._id, thing.itemData.itemName, thing.myComment.body
    this.addComment = function(id, owner, name, comment) {
      // wrap my data to send to mongo db
      var sendData = {
        msg: comment,
        ownerId: self.user._id,
        itemId: id,
        itemName: name
      };
      // console.log(sendData);

      // save to mongodb
      $http.post("/add", sendData);

      this.myComment = {};

      // reload page
      findItems();
    };

    // create new item for sale
    this.listItem = function(name, owner, desc, price) {
      var item = self;
      // console.log(item.myItem);

      // wrap my data to send to mongo db
      var sendItem = {
        name: item.myItem.name,
        owner: item.user._id,
        description: item.myItem.description,
        price: item.myItem.price
      };
      // console.log(sendItem);

      // send to mongodb
      $http.post("/list", sendItem);
      item.myItem = {};
      findItems();
    };

    // turn on store vis
    var showStore = function() {
      self.store.state = true;
    };
    // turn off login vis
    var hideLogin = function() {
      self.keep.state = false;
    };
      // turn on current user vis
    var currentUser = function() {
      self.current.state = true;
    };

    // login func, (this func is local to this iife)
    this.login = function() {
      console.log("login panda");
      var item = self;
      // console.log(item.loginInfo)
      var user = item.loginInfo;

      $http.post("/login", user).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

        // console.log(response, "user found!");
        self.user = response.data[0];
        findItems();
        showStore();
        // hide login
        hideLogin();
        currentUser();

        // reset input
        self.loginInfo.userName = "";
        self.loginInfo.userPassword = "";

        // console.log(self.user, "current user.");
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        self.loginInfo.userName = "";
        self.loginInfo.userPassword = "";
      });
    };

  }]);

}());
