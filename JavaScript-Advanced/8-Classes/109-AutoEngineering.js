function autoEngineeringCompany(productionLine) {
  const factory = {}

  productionLine.forEach(line => {
    let [make, model, qty] = line.split(' | ');
    qty = Number(qty);

    if (factory[make] == undefined) {
      factory[make] = {}
    }

    if (factory[make][model] == undefined) {
      factory[make][model] = 0;
    }

    factory[make][model] += qty;
  });

  for (const [make, models] of Object.entries(factory)) {
    console.log(make);
    for (const model in models) {
      console.log(`###${model} -> ${models[model]}`);
    }
  }
}
autoEngineeringCompany(
  ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)