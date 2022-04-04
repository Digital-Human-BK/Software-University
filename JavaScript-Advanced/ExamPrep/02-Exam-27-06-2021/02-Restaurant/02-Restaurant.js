class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(products) {
    products.forEach(p => {
      let [name, qty, price] = p.split(' ');
      qty = Number(qty);
      price = Number(price);

      if (price <= this.budgetMoney) {
        this.budgetMoney -= price;

        if (this.stockProducts[name]) {
          this.stockProducts[name] += qty;
        } else {
          this.stockProducts[name] = qty;
        }
        this.history.push(`Successfully loaded ${qty} ${name}`);
      } else {
        this.history.push(`There was not enough money to load ${qty} ${name}`)
      }
    });
    return this.history.join('\n');
  }
  addToMenu(meal, products, price) {
    if (this.menu[meal]) {
      return `The ${meal} is already in the our menu, try something different.`
    }

    this.menu[meal] = {
      products: {},
      price: price,
    }

    products.forEach(p => {
      let [name, qty] = p.split(' ');
      qty = Number(qty);
      this.menu[meal].products[name] = qty;
    });

    if (Object.keys(this.menu).length == 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
    } else {
      return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
    }
  }
  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return "Our menu is not ready yet, please come later...";
    }
    let resultMenu = Object.keys(this.menu).map(meal => {
      return `${meal} - $ ${this.menu[meal].price}`
    }).join('\n');

    return resultMenu;
  }
  makeTheOrder(meal) {
    if (this.menu[meal] == undefined) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`
    }
    let productsNeeded = Object.entries(this.menu[meal].products);
    let canPrepareMeal = true;

    productsNeeded.forEach(([p, qty]) => {
      if (this.stockProducts[p] < qty) {
        canPrepareMeal = false;
      }
    });

    if (canPrepareMeal) {
      productsNeeded.forEach(([p, qty]) => {
        this.stockProducts[p] -= qty;
      });

      this.budgetMoney += this.menu[meal].price;

      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    } else {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
    }

  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

