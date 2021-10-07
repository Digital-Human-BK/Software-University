function gladiator(array) {

  let inventory = array.shift().split(" ");

  for (let i = 0; i < array.length; i++) {

    let [command, equipment] = array[i].split(" ");

    switch (command) {
      case "Buy":
        buy(equipment);
        break;
      case "Trash":
        trash(equipment);
        break;
      case "Repair":
        repair(equipment);
        break;
      case "Upgrade":
        upgrade(equipment)
        break;
    }

    function buy(equipment) {
      if (inventory.includes(equipment) != true) {
        return inventory.push(equipment);
      }
    }
    function trash(equipment) {
      if (inventory.includes(equipment)) {
        return inventory.splice(inventory.indexOf(equipment), 1);
      }
    }
    function repair(equipment) {
      if (inventory.includes(equipment)) {
        let repaired = inventory.splice(inventory.indexOf(equipment), 1);
        return inventory.push(repaired);
      }
    }
    function upgrade(equipment) {
      let [item, upgrade] = equipment.split("-");
      if (inventory.includes(item)) {
        return inventory.splice(inventory.indexOf(item)+1, 0, `${item}:${upgrade}`);
      }
    }
  }

  console.log(inventory.join(" "));
  
}
gladiator(['SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel'])