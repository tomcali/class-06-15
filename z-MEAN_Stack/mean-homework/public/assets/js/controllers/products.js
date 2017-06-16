// this is module for products wil be imported by controller.js
(function() {

  var app = angular.module("store-products", []);
    /* directive needs the server to be on to work */
    // directive fun my little html
  app.directive("productTitle", function() {
    // type of directive is E for elemnt, A is for attritube
    return {
      restrict: "E",
      templateUrl: "product-title.html" // url template
    };
  });

  // dirctive with a controller
  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

}());
