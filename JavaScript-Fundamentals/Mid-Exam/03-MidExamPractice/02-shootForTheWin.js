function shootForTheWin([sequence, ...indices]) {
  let targets = sequence.split(" ").map(Number);

  for (let index of indices) {
    if (index == "End") {
      let count = targets.filter(x => x === -1).length;
      console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
      break;
    }

    index = Number(index);

    if ((targets.length) > index) {
      targets = shoot(targets, index)
    }
  }

  function shoot(targets, index) {
    let target = targets[index];

    if (target === -1) {
      return targets;
    }

    for (let i = 0; i < targets.length; i++) {

      if (i == index) {
        continue;
      }
      
      if (targets[i] !== -1) {
        if (targets[i] > target) {
          targets[i] -= target;
        } else {
          targets[i] += target;
        }
      }
    }
    targets[index] = -1;

    return targets;
  }
}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End'])
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])