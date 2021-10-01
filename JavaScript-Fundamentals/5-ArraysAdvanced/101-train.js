function train(input) {
  let wagons = input
    .shift()
    .split(" ")
    .map(Number);

  const maxCapacity = Number(input.shift());
  
  for (let i = 0; i < input.length; i++) {

    let [command, num] = input[i].split(" ");
    if (command === "Add") {
      wagons.push(Number(num));
    } else {
      peopleToAdd = Number(command);
      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + peopleToAdd <= maxCapacity) {
          wagons.splice(j, 1, wagons[j] + peopleToAdd);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));

}
train(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75']
)
train(['0 0 0 10 2 4',
  '10',
  'Add 10',
  '10',
  '10',
  '10',
  '8',
  '6']
)