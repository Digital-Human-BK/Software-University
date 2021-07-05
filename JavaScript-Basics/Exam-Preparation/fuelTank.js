function fuelTank(input) {
  let fuelType = input[0];
  let fuelInTank = Number(input[1]);

  switch (fuelType) {
    case "Diesel":
      if (fuelInTank >= 25) {
        console.log(`You have enough diesel.`);
      } else {
        console.log(`Fill your tank with diesel!`);
      }
      break;
    case "Gasoline":
      if (fuelInTank >= 25) {
        console.log(`You have enough gasoline.`);
      } else {
        console.log(`Fill your tank with gasoline!`);
      }
      break;
    case "Gas":
      if (fuelInTank >= 25) {
        console.log(`You have enough gas.`);
      } else {
        console.log(`Fill your tank with gas!`);
      }
      break;
    default: console.log("Invalid fuel!"); break;

  }
}
fuelTank(["Gasoline", "25"])
//"Gasoline", "40", "Gas", "25", "Kerosene", "200"