function buyFruit(fruit, weight, price){
  let money = (weight / 1000) * price;
  console.log(`I need $${money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}
buyFruit('orange', 2500, 1.80)
buyFruit('apple', 1563, 2.35)