  angular.module("orderApp", [])
    .controller("OrderListController", function($http) {
      var orderList = this;
      orderList.orders = [];
      orderList.itemBoxes = [];
      orderList.itemBoxCounter = 1;

      orderList.addOrder = function() {
        var newOrder = {

          //Grab the recipe form data and complete this object to be submitted to the server
          //hint: check out the recipeList object
          address: ,
          notes: ,
          items: orderList.itemBoxes,
        };
        $http({
          method: "POST",
          url: "/neworder",
          data: newOrder
        }).then(function(result) {

          //push the result to the orderList.orders array
          //clear the form and reset the itemBoxCounter
        });
      };

      orderList.getOrders = function() {
        $http({
          method: "GET",
          url: "/orders"
        }).then(function(result) {
          //loop over the results and push them to the orderList.orders array


        });
      };

      orderList.addItemBox = function() {
        orderList.itemBoxes.push({
          name: "item" + orderList.itemBoxCounter,
          placeholder: "Item #" + orderList.itemBoxCounter
        });
        orderList.itemBoxCounter++;
      };


      orderList.getOrders();
    });
