function aluminium(input) {
  let count = Number(input[0])
  let type = input[1]
  let deliveryType = input[2]
  let price = 0;

  switch (type) {
    case "90X130":
      if (count < 10) {
        console.log("Invalid order");
      } else if (count <= 30) {
        price = count * 110;
      } else if (count <= 60) {
        price = (count * 110) * 0.95;
      } else {
        price = (count * 110) * 0.92;
      }
      break;

    case "100X150":
      if (count < 10) {
        console.log("Invalid order");
      } else if (count <= 40) {
        price = count * 140;
      } else if (count <= 80) {
        price = (count * 140) * 0.94;
      } else {
        price = (count * 140) * 0.90;
      }
      break;

    case "130X180":
      if (count < 10) {
        console.log("Invalid order");

      } else if (count <= 20) {
        price = count * 190;
      } else if (count <= 50) {
        price = (count * 190) * 0.93;
      } else {
        price = (count * 190) * 0.88;
      }
      break;

    case "200X300":
      if (count < 10) {
        console.log("Invalid order");
      } else if (count <= 25) {
        price = count * 250;
      } else if (count <= 50) {
        price = (count * 250) * 0.91;
      } else {
        price = (count * 250) * 0.86;
      }
      break;
  }

  if (deliveryType === "With delivery") {
    price+=60;
    if (count > 99) {
      price*=0.96
    }
    console.log(`${price.toFixed(2)} BGN`)
  }
}


aluminium(["4", "90X130", "With delivery"])