function barIncome(customers) {

  let total = 0;

  let namePattern = /%(?<name>[A-Z][a-z]+)%/;
  let itemPattern = /<(?<item>\w+)>/;
  let qtyPattern = /\|(?<qty>[0-9]+)\|/;
  let pricePattern = /(?<price>\d+(?:\.\d+)?)\$/;

  for (let c of customers) {
    if (c == "end of shift") {
      break;
    }

    if (namePattern.test(c) && itemPattern.test(c) && qtyPattern.test(c) && pricePattern.test(c)) {

      let name = c.match(namePattern);
      name = name.groups.name;
      
      let item = c.match(itemPattern);
      item = item.groups.item;

      let qty = c.match(qtyPattern);
      qty = Number(qty.groups.qty);

      let price = c.match(pricePattern);
      price = Number(price.groups.price);

      total+= (qty*price);

      console.log(`${name}: ${item} - ${(qty*price).toFixed(2)}`);
    }
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