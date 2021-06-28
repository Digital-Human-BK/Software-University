function aluminumJoinery(input) {
  let numJoinery = Number(input[0]);
  let type = input[1];
  let delivery = input[2];

  if (numJoinery < 10) {
      console.log(`Invalid order`);
  } else {

      let price = 0;
      switch (type) {
          case "90X130":
              price = 110;
              if (numJoinery > 30 && numJoinery <= 60) {
                  price *= 0.95;
              } else if (numJoinery > 60) {
                  price *= 0.92;
              }
              break;
          case "100X150":
              price = 140;
              if (numJoinery > 40 && numJoinery <= 80) {
                  price *= 0.94;
              } else if (numJoinery > 80) {
                  price *= 0.90;
              }
              break;
          case "130X180":
              price = 190;
              if (numJoinery > 20 && numJoinery <= 50) {
                  price *= 0.93;
              } else if (numJoinery > 50) {
                  price *= 0.88;
              }
              break;
          case "200X300":
              price = 250;
              if (numJoinery > 25 && numJoinery <= 50) {
                  price *= 0.91;
              } else if (numJoinery > 50) {
                  price *= 0.86;
              }
              break;
      }

      let total = price * numJoinery;
      if (delivery === "With delivery") {
          total += 60;
      }

      if (numJoinery > 99) {
          total *= 0.96;
      }
      console.log(`${total.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["105", "100X150", "With delivery"])