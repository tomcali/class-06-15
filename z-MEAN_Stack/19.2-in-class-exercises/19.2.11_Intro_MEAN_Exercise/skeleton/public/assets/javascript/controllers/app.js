angular.module('recipeApp', [])
  .controller('RecipeListController', function($http) {
    var recipeList = this;
    recipeList.recipes = [];
    recipeList.ingredientBoxes = [];
    recipeList.ingredientBoxCounter = 1;

    recipeList.addRecipe = function() {
      var newRecipe = {

        //Grab the recipe form data and complete this object to be submitted to the server
        //hint: check out the recipeList object




        title: ,
        notes: ,
        ingredients: recipeList.ingredientBoxes,
      };
      $http({
        method: "POST",
        url: "/newrecipe",
        data: newRecipe
      }).then(function(result) {
        //This will run after the server sends its response from the /newrecipe route.
        //push the result to the recipeList.recipes array
        //clear the form and reset the ingredientBoxCounter





      });
    };

    recipeList.getRecipes = function() {
      $http({
        method: "GET",
        url: "/recipes"
      }).then(function(result) {

        //This will run after the server sends its response from the /recipes route.
        //loop over the results and push them to the recipeList.recipes array





      });
    };

    recipeList.addIngredientBox = function() {
      recipeList.ingredientBoxes.push({
        name: "ingredient" + recipeList.ingredientBoxCounter,
        placeholder: "Ingredient #" + recipeList.ingredientBoxCounter
      });
      recipeList.ingredientBoxCounter++;
    };


    recipeList.getRecipes();
  });
