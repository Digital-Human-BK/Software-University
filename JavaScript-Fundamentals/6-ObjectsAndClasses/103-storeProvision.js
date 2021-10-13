function storeProvision(stock, ordered) {
  let store = [];
  for (let i = 0; i < stock.length; i += 2) {
    let name = stock[i];
    let qty = Number(stock[i + 1]);

    let product = {
      name,
      qty,
    }
    store.push(product);
  }

  for (let j = 0; j < ordered.length; j += 2) {
    let name = ordered[j];
    let qty = Number(ordered[j + 1]);

    let product = {
      name,
      qty,
    }

    let indexOfProduct = store.findIndex(item => item.name === name);
    if (indexOfProduct === -1) {
      store.push(product);
    } else {
      store[indexOfProduct].qty += qty;
    }
  }

  for (const product of store) {
    console.log(`${product.name} -> ${product.qty}`);
  }
}
storeProvision([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ]
)