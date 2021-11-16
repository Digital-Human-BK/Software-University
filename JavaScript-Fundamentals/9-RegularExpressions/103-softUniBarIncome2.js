function barIncome(array) {

  let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<item>\w+)>([^\|\$\%\.]+)?\|(?<qty>[0-9]+)\|([^\|\$\%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/gm

  let validOrder = pattern.exec(array);
  let total = 0;

  while (validOrder !== null) {
    let name = validOrder.groups.name;
    let item = validOrder.groups.item;
    let qty = Number(validOrder.groups.qty);
    let price = Number(validOrder.groups.price);

    total+=(qty*price);

    console.log(`${name}: ${item} - ${(qty * price).toFixed(2)}`);
    
    validOrder = pattern.exec(array);
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

barIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
])
barIncome([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift'
])