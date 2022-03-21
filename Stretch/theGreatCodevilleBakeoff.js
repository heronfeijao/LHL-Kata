const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let availableIngrediets = [];
  let recipe = "";
  function ingredientCheck(bakery) {
    for (let ingredientsBakery of bakery) {
      for (let ingredientsRecipes of recipes) {
        if (ingredientsRecipes.ingredients.includes(ingredientsBakery)) {
          availableIngrediets.push(ingredientsBakery)
        };
      }
    }
  }
  ingredientCheck(bakeryA);
  ingredientCheck(bakeryB);

  for (let i = 0; i < recipes.length; i++) {
    if (availableIngrediets.includes(recipes[i].ingredients[0] && recipes[i].ingredients[1])) {
      recipe = recipes[i];
    }
  }

  return recipe.name;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));