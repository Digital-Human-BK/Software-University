function lowestPrices(input){
  let catalog = {};

  for (const line of input) {
    let [town, product, price] =line.split(' | ');
    price = Number(price);

    if(catalog[product] == undefined) {
      catalog[product] = {};
    }
    catalog[product][town] = price;
  }

  for (let product in catalog) {
    let sortedProducts = Object.entries(catalog[product]).sort(sortByPrice);
    console.log(`${product} -> ${sortedProducts[0][1]} (${sortedProducts[0][0]})`);
  }


  function sortByPrice(a, b) {
    return a[1] - b[1];
  }
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)