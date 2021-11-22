function theLift(array) {
  let people = Number(array[0]);
  let wagons = array[1].split(" ").map(Number);

  let i = 0;

  while (people > 0) {

    let pplIn = 0;

    if (wagons[i] < 4 && wagons[i] >= 0) {
      pplIn = 4 - wagons[i];
      if (people < pplIn) {
        pplIn = people;
      }
      wagons[i] += pplIn;
      people -= pplIn;
    }

    let full = wagons.filter(x => x >= 4);

    if (full.length == wagons.length) {
      if (people == 0) {
        console.log(wagons.join(" "));
        return;
      }
      console.log(`There isn't enough space! ${people} people in a queue!
${wagons.join(" ")}`);
      break;
    }

    i++;
  }
  if (people == 0) {
    console.log(`The lift has empty spots!
${wagons.join(" ")}`);
  }
}
theLift([
  "15",
  "0 0 0 0 0"
]);
theLift([
  "10",
  "0 2 0"
]);