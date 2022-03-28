function makeJuice(products) {
  const bottles = new Map();
  const producedBottles = new Map;

  products.forEach(p => {
    let [juiceName, juiceQty] = p.split(' => ');
    juiceQty = Number(juiceQty);

    if(bottles.has(juiceName) == false) {
      bottles.set(juiceName, juiceQty);
    } else {
      bottles.set(juiceName, bottles.get(juiceName) + juiceQty);
    }

    if(bottles.get(juiceName) >= 1000) {
      producedBottles.set(juiceName, Math.trunc(bottles.get(juiceName) / 1000))
    }
  });

  producedBottles.forEach((value, key) => {
    console.log(`${key} => ${value}`);
  })
}
makeJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
makeJuice(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']
)