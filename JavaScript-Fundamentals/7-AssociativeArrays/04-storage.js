function storage(array){
  let stock = new Map();

  for (const line of array) {
    let [product, qty] = line.split(' ');
    qty = Number(qty);

    if(stock.has(product)) {
      qty +=stock.get(product)
    }

    stock.set(product, qty);    
  }

  for (const [product, qty] of stock) {
    console.log(`${product} -> ${qty}`);  
  }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)