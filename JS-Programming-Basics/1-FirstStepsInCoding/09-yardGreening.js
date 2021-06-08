function greening(input) {

  let area = Number(input[0]);

  let totalPrice = area * 7.61;
  let discount = totalPrice * 0.18;
  let finalPrice = totalPrice - (totalPrice * 0.18);

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

greening(['550'])