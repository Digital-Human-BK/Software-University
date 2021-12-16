function treasureHunt(array) {
  let chest = array.shift().split("|");

  for (const line of array) {
    let [command, ...rest] = line.split(" ");
    if (command == "Yohoho!") {
      break;
    }

    if (command == "Loot") {
      rest.forEach(item => {
        if (!chest.includes(item)) {
          chest.unshift(item);
        }
      });
    } 
    if (command == "Drop") {
      let index = Number(rest[0]);
      if (index >= 0 && index < chest.length) {
        let item = chest.splice(index, 1);
        chest.push(item[0]);
      }
    } 
    if (command == "Steal") {
      let count = Number(rest[0]);
      let stolenItems = chest.splice(-count);
      console.log(stolenItems.join(", "));
    }
  }
  if (chest.length == 0) {
    console.log("Failed treasure hunt.");
  } else {
    let count = chest.length;
    let averageLoot = chest
      .map(x => x = Number(x.length))
      .reduce((a, b) => a + b);
    console.log(`Average treasure gain: ${(averageLoot / count).toFixed(2)} pirate credits.`);
    
  }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!"])
