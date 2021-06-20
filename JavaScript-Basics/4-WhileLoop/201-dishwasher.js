function dishwasher(input) {
  let bottles = Number(input[0]);
  let detergent = bottles * 750;

  let index = 1;
  let command = input[index];

  let dishes = 0;
  let pots = 0;
  let detergentPots = 0;
  let detergentDishes = 0;
  let detergentUsed = 0

  while (command != 'End') {

    let washCycle = Number(input[index]);

    if (index % 3 === 0) {
      pots += washCycle;
      detergentPots = detergentPots + (washCycle * 15);
    } else {
      dishes += washCycle;
      detergentDishes = detergentDishes + (washCycle * 5);
    }

    detergentUsed = detergentDishes + detergentPots;

    if (detergentUsed > detergent) {
      console.log(`Not enough detergent, ${detergentUsed - detergent} ml. more necessary!`);
      break;
    }
    index++;
    command = input[index];
  }
  if (detergent >= detergentUsed) {
    console.log("Detergent was enough!");
    console.log(`${dishes} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${detergent - detergentUsed} ml.`);
  }
}


dishwasher(['1', '10', '15', '10', '12', '13', '30'])