function movingTarget(array) {
  let targets = array.shift().split(" ").map(Number);

  for (const line of array) {
    let [command, index, power] = line.split(" ");
    index = Number(index);
    power = Number(power);

    if (command === "End") {
      console.log(targets.join("|"))
      break;
    } else if (command === "Shoot") {
      shoot(targets, index, power);
    } else if (command === "Add") {
      add(targets, index, power);
    } else if (command === "Strike") {
      strike(targets, index, power);
    }
  }

  function shoot(targets, index, power) {

    if (targets.length > index && index >= 0) {
      if (targets[index] - power <= 0) {
        targets.splice(index, 1);
      } else {
        targets[index] -= power;
      }
    }
  }
  function add(targets, index, value) {

    if (targets.length > index && index >= 0) {
      targets.splice(index, 0, value);
    } else {
      console.log("Invalid placement!");
    }
  }
  function strike(targets, index, radius) {

    if ((index - radius) < 0 || targets.length <= index || (index + radius) >= targets.length) {
      console.log(`Strike missed!`);
    } else {
      targets.splice(index - radius, 1 + (radius * 2));
    }
  }
}
movingTarget([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End'
])
movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End'])