function storeCatalogue(products){
  let temp = [];

  for (const product of products) {
    let [name, price] = product.split(' : ');
    price = Number(price);
    temp.push({name, price});
  }

  let catalogue = temp.sort((a,b) => a.name.localeCompare(b.name));
  
  
  let group = catalogue[0].name[0];
  console.log(group);
  for (const product of catalogue) {
    if (product.name[0] == group){
      console.log(`  ${product.name}: ${product.price}`);
    } else {
      group = product.name[0];
      console.log(group);
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)