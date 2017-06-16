angular.module("budgetApp", [])
  .controller("BudgetTrackerController", function($http) {
    var budgetTracker = this;
    budgetTracker.salary = 0;
    budgetTracker.expenseTotal = 0;

    budgetTracker.login = function() {
      budgetTracker.loggedIn = true;

      // post the username to the server

      // save the data and run the calculate function (do the following after the server responds)
      budgetTracker.userId = result.data._id;
      budgetTracker.username = result.data.username;
      budgetTracker.salary = result.data.salary;
      budgetTracker.expenses = result.data.expenses;
      budgetTracker.calculate();
    };

    budgetTracker.updateSalary = function() {
      // send the salary to the server to '/updatesalary/' + budgetTracker.userId

      // then have it do the following
      budgetTracker.salary = result.data.salary;
      budgetTracker.calculate();
      alert("Salary saved to DB");
    };

    budgetTracker.addExpense = function() {
      // send the data to '/newexpense/' + budgetTracker.userId

      data = {
        amount: budgetTracker.expense.amount,
        name: budgetTracker.expense.name
      };

      // then run
      budgetTracker.login();

    };

    budgetTracker.calculate = function() {
      // done for you
      var expenseTotal = 0;
      angular.forEach(budgetTracker.expenses, function(eachOne) {
        expenseTotal += eachOne.amount;
      });
      budgetTracker.monthlySalary = budgetTracker.salary / 12;
      budgetTracker.moneyLeft = budgetTracker.monthlySalary - expenseTotal;
    };

    budgetTracker.deleteExpense = function(expenseId) {
      // delete an expense by hitting '/deleteexpense/' + expenseId

      // then run
      budgetTracker.login();
    };


  });
