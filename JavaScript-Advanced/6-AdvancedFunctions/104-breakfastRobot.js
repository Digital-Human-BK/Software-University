function solution() {
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  }

  const ingredients = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  }

  const actions = {
    restock,
    prepare,
    report,
  }



  return control;

  //functions
  function control(input) {
    let [command, paramOne, paramTwo] = input.split(' ');
    return actions[command](paramOne, paramTwo);
  }

  function restock(element, qty) {
    qty = Number(qty);

    ingredients[element] += qty;
    return `Success`;
  }

  function prepare(recipe, qty) {
    qty = Number(qty);

    for (const element in recipes[recipe]) {

      let inStock = ingredients[element];
      let elementQty = recipes[recipe][element] * qty;

      if (inStock - elementQty < 0) {
        return `Error: not enough ${element} in stock`;
      }
    }

    for (const element in recipes[recipe]) {
      ingredients[element] -= recipes[recipe][element] * qty;
    }
    return `Success`;
  }

  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
  }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

