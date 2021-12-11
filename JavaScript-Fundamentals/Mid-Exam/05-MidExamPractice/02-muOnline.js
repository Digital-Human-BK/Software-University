function muOnline(string) {
  let health = 100;
  let bitcoins = 0;
  let levelComplete = true;

  let rooms = string.split("|");

  for (let i = 0; i < rooms.length; i++) {
    let [command, number] = rooms[i].split(" ");
    number = Number(number);

    if (command === "potion") {
      let [hp, healAmount] = potion(health, number);
      health = hp;
      console.log(`You healed for ${healAmount} hp.`);
      console.log(`Current health: ${hp} hp.`);

    } else if (command === "chest") {

      console.log(`You found ${number} bitcoins.`);
      bitcoins += number;

    } else {

      if (health - number > 0) {
        health -= number;
        console.log(`You slayed ${command}.`)
      } else {
        health = 0; //Not needed 
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        levelComplete = false;
        break;
      }
    }
  }

  if (levelComplete) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }

  function potion(health, number) {
    let healAmount = number;

    if (health + healAmount > 100) {
      healAmount = 100 - health;
      health = 100;
    } else {
      health += healAmount;
    }

    return [health, healAmount];
  }
}
// muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')