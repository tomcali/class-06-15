angular.module("recipeApp", [])
  .controller("RecipeListController", function($http) {
    var recipeList = this;
    recipeList.recipes = [];
    recipeList.ingredientBoxes = [];
    recipeList.ingredientBoxCounter = 1;

    recipeList.addRecipe = function() {
      var newRecipe = {
        title: recipeList.recipeTitle,
        notes: recipeList.recipeNote,
        ingredients: recipeList.ingredientBoxes
      };
      $http({
        method: "POST",
        url: "/newrecipe",
        data: newRecipe
      }).then(function(result) {
        console.log(result.data);
        recipeList.recipes.push(result.data);
        recipeList.recipeTitle = "";
        recipeList.recipeNote = "";
        recipeList.ingredientBoxes = [];
        recipeList.ingredientBoxCounter = 1;
      });
    };

    recipeList.getRecipes = function() {
      $http({
        method: "GET",
        url: "/recipes"
      }).then(function(result) {
        angular.forEach(result.data, function(eachOne) {
          recipeList.recipes.push(eachOne);
          console.log(recipeList.recipes);
        });
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
