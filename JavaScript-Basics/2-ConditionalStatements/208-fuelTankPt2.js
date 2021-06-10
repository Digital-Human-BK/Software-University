function fuelTank2(input) {
  let fuelType = input[0];
  let liters = Number(input[1]);
  let clubCard = input[2];

  let price = 0;

  switch (clubCard) {
    case "Yes":
      switch (fuelType) {
        case "Gas": price = 0.93 - 0.08; break;
        case "Gasoline": price = 2.22 - 0.18; break;
        case "Diesel": price = 2.33 - 0.12; break;
      }
      break;
    case "No":
      switch (fuelType) {
        case "Gas": price = 0.93; break;
        case "Gasoline": price = 2.22; break;
        case "Diesel": price = 2.33; break;
      }
      break;
  }

  if (liters < 20) {
    price = price * liters;
  } else if (liters > 25) {
    price = (price * liters) * 0.90;
  } else {
    price = (price * liters) * 0.92;
  }

  console.log(`${price.toFixed(2)} lv.`);
}
fuelTank2(["Diesel", 10, "Yes"])