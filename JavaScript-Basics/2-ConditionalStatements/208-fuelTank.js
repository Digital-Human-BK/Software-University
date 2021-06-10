function fuelTank(input) {
  let fuelType = input[0];
  let fuelInTank = Number(input[1]);

  switch (fuelType) {
    case "Diesel":
      if (fuelInTank >= 25) {
        console.log(`You have enough ${fuelType}.`);
      } else {
        console.log(`Fill your tank with ${fuelType}!`);
      }
      break;
    case "Gasoline":
      if (fuelInTank >= 25) {
        console.log(`You have enough ${fuelType}.`);
      } else {
        console.log(`Fill your tank with ${fuelType}!`);
      }
      break;
    case "Gas":
      if (fuelInTank >= 25) {
        console.log(`You have enough ${fuelType}.`);
      } else {
        console.log(`Fill your tank with ${fuelType}!`);
      }
      break;
    default: console.log("Invalid fuel!"); break;

  }
}
fuelTank(["Diesel", 10])