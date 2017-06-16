angular.module("budgetApp", [])
  .controller("BudgetTrackerController", function($http) {
    var budgetTracker = this;
    budgetTracker.salary = 0;
    budgetTracker.expenseTotal = 0;

    budgetTracker.login = function() {
      console.log(budgetTracker.username);
      budgetTracker.loggedIn = true;

      $http({
        method: "POST",
        url: "/user",
        data: {
          username: budgetTracker.username
        }
      }).then(function(result) {
        console.log(result.data);
        budgetTracker.userId = result.data._id;
        budgetTracker.username = result.data.username;
        budgetTracker.salary = result.data.salary;
        budgetTracker.expenses = result.data.expenses;
        budgetTracker.calculate();
      });
    };

    budgetTracker.updateSalary = function() {
      $http({
        method: "POST",
        url: "/updatesalary/" + budgetTracker.userId,
        data: {
          salary: budgetTracker.salary
        }
      }).then(function(result) {
        budgetTracker.salary = result.data.salary;
        budgetTracker.calculate();

        alert("Salary saved to DB");
      });
    };

    budgetTracker.addExpense = function() {
      $http({
        method: "POST",
        url: "/newexpense/" + budgetTracker.userId,
        data: {
          amount: budgetTracker.expense.amount,
          name: budgetTracker.expense.name
        }
      }).then(function(result) {
        budgetTracker.login();
      });
    };

    budgetTracker.calculate = function() {
      var expenseTotal = 0;
      angular.forEach(budgetTracker.expenses, function(eachOne) {
        expenseTotal += eachOne.amount;
      });
      budgetTracker.monthlySalary = budgetTracker.salary / 12;
      budgetTracker.moneyLeft = budgetTracker.monthlySalary - expenseTotal;
    };

    budgetTracker.deleteExpense = function(expenseId) {
      $http({
        method: "GET",
        url: "/deleteexpense/" + expenseId
      }).then(function(result) {
        budgetTracker.login();
      });
    };


  });
