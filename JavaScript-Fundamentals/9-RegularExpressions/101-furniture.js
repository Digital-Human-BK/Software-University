function funrniture(array) {
  // let myPattern = />>(?<item>\w+)<<(?<price>\d+|\d+\.\d+)!(?<qty>\d)/g
  let pattern = />>(?<item>\w+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g

  let validPurchase = pattern.exec(array);
  let result =[];
  let total = 0;

  while (validPurchase !== null) {
    let item = validPurchase.groups.item;
    let price = Number(validPurchase.groups.price);
    let qty = Number(validPurchase.groups.qty);

    result.push(item);
    total+= (price*qty);

    validPurchase = pattern.exec(array);
  }
  result.push(`Total money spend: ${total.toFixed(2)}`);

  console.log("Bought furniture:");
  console.log(result.join("\n"));
}
funrniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])