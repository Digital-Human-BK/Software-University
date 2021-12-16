function war(array) {
  let pirateShip = array
    .shift()
    .split(">")
    .map(Number);

  let warship = array
    .shift()
    .split(">")
    .map(Number);

  let maxHp = Number(array.shift());

  for (const line of array) {
    if (line == "Retire") {
      console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
      console.log(`Warship status: ${warship.reduce((a, b) => a + b)}`);
      break;
    }
    let [command, value1, value2, value3] = line.split(" ");
    value1 = Number(value1);
    value2 = Number(value2);
    value3 = Number(value3);

    if (command == "Fire") {
      fire(warship, value1, value2);
      if (warship.some(x => x <= 0)) {
        console.log("You won! The enemy ship has sunken.");
        break;
      }
    } else if (command == "Defend") {
      defend(pirateShip, value1, value2, value3);
      if (pirateShip.some(x => x <= 0)) {
        console.log("You lost! The pirate ship has sunken.");
        break;
      }
    } else if (command == "Repair") {
      repair(pirateShip, value1, value2, maxHp);
    } else if (command == "Status") {
      console.log(`${status(pirateShip, maxHp)} sections need repair.`);
    }


  }
  function fire(warship, index, dmg) {
    if (index >= 0 && index < warship.length) {
      warship[index] -= dmg;
    }
  }
  function defend(pirateShip, start, end, dmg) {
    if (start >= 0 && start < pirateShip.length && end >= 0 && end < pirateShip.length && start < end) {
      for (let i = start; i <= end; i++) {
        pirateShip[i] -= dmg;
      }
    }
  }
  function repair(pirateShip, index, hp, maxHp) {
    if (index >= 0 && index < pirateShip.length) {
      if (pirateShip[index] + hp <= maxHp) {
        pirateShip[index] += hp
      } else {
        pirateShip[index] = maxHp;
      }
    }
  }
  function status(pirateShip, maxHp) {
    let count = 0;
    pirateShip.forEach(section => {
      if (section < (maxHp * 0.2)) {
        count++;
      }
    });
    return count;
  }
}
war(["12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 3 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"])
console.log("===========================");
war(["12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"])
console.log("===========================");
war(["2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire"])

