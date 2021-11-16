function barIncome(array) {

  let totalIncome = 0;

  for (const customer of array) {
    let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<item>\w+)>([^\|\$\%\.]+)?\|(?<qty>[0-9]+)\|([^\|\$\%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/gm

    let match = pattern.exec(customer);

    if (match) {
      let totalPrice = Number(match.groups.qty) * Number(match.groups.price);
      totalIncome += totalPrice;

      console.log(`${match.groups.name}: ${match.groups.item} - ${totalPrice.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
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