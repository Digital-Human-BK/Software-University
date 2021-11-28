function counterStrike(array) {
  let energy = Number(array.shift());
  let wonBattles = 0;

  for (let distance of array) {

    if (distance == "End of battle") {
      console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
      break;
    }

    distance = Number(distance);
    if (energy - distance < 0) {
      console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
      break;
    }    

    energy-= distance;
    wonBattles++;

    if (wonBattles % 3 == 0) {
      energy+=wonBattles;
    }
  }
}
counterStrike([
  '100', '10', '10',
  '10', '1', '2',
  '3', '73', '10'
])
counterStrike(['200', '54', '14', '28', '13', 'End of battle'])