function orders(drink, quantity) {
  let price = 0;
  switch (drink) {
    case "coffee": price = (1.50 * quantity).toFixed(2); break;
    case "water": price = quantity.toFixed(2); break;
    case "coke": price = (1.40 * quantity).toFixed(2); break;
    case "snacks": price = (2 * quantity).toFixed(2); break;
  }
  return price;
}
console.log(orders("water", 5));
console.log(orders("coffee", 2));