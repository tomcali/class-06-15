angular.module("orderApp", [])
  .controller("OrderListController", function($http) {
    var orderList = this;
    orderList.orders = [];
    orderList.itemBoxes = [];
    orderList.itemBoxCounter = 1;

    orderList.addOrder = function() {
      var newOrder = {
        address: orderList.address,
        notes: orderList.notes,
        items: orderList.itemBoxes
      };
      $http({
        method: "POST",
        url: "/neworder",
        data: newOrder
      }).then(function(result) {
        orderList.orders.push(result.data);
        orderList.address = "";
        orderList.notes = "";
        orderList.itemBoxes = [];
        orderList.itemBoxCounter = 1;
      });
    };

    orderList.getOrders = function() {
      $http({
        method: "GET",
        url: "/orders"
      }).then(function(result) {
        angular.forEach(result.data, function(eachOne) {
          orderList.orders.push(eachOne);
        });
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
