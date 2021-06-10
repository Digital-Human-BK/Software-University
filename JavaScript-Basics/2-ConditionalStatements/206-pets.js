function pets(input) {
  let days = Number(input[0])
  let foodLeft = Number(input[1])
  let dogFood = Number(input[2])
  let catFood = Number(input[3])
  let turtleFood = Number(input[4]) / 1000;

  let foodConsumed = (dogFood * days) + (catFood * days) + (turtleFood * days);
  
  if (foodLeft >= foodConsumed) {
    console.log(`${Math.floor(foodLeft - foodConsumed)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(foodConsumed - foodLeft)} more kilos of food are needed.`);
  }
}
pets([])