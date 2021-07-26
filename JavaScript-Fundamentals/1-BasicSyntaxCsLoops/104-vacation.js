function vacation(count, type, day) {

  let price = 0;
  let totalPrice = 0;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday": price = 8.45; break;
        case "Saturday": price = 9.80; break;
        case "Sunday": price = 10.46; break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday": price = 10.90; break;
        case "Saturday": price = 15.60; break;
        case "Sunday": price = 16; break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday": price = 15; break;
        case "Saturday": price = 20; break;
        case "Sunday": price = 22.50; break;
      }
      break;
  }

  if (type == "Students") {
    if (count >= 30) {
      totalPrice = (price * count) * 0.85;
    } else {
      totalPrice = price * count;
    }
  } else if ( type == "Business") {
    if (count >= 100) {
      totalPrice = (count - 10) * price;
    } else {
      totalPrice = count * price;
    }
  } else if ( type == "Regular") {
    if (count >= 10 && count <=20) {
      totalPrice = (count * price) * 0.95;
    } else {
      totalPrice = count * price;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
  "Regular",
  "Saturday"
  )