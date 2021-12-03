function heartDelivery(array) {
  let neighbourhood = array
    .shift()
    .split("@")
    .map(Number);

  let length = neighbourhood.length;
  let index = 0;

  for (const line of array) {
    let [command, i] = line.split(" ");

    if (command === "Love!") {
      console.log(`Cupid's last position was ${index}.`);

      let completedHouses = neighbourhood.filter(x => x <= 0);

      if (completedHouses.length === length) {
        console.log("Mission was successful.");
      } else {
        console.log(`Cupid has failed ${length - completedHouses.length} places.`);
      }
      break;
    }

    i = Number(i);

    if (index + i < length) {
      index += i;
      neighbourhood[index] -= 2;

      if (neighbourhood[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
      } else if (neighbourhood[index] < 0) {
        console.log(`Place ${index} already had Valentine's day.`);
      }

    } else {
      index = 0;

      neighbourhood[index] -= 2;

      if (neighbourhood[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
      } else if (neighbourhood[index] < 0) {
        console.log(`Place ${index} already had Valentine's day.`);
      }
    }

  }

}
// heartDelivery(["10@10@10@2",
//   "Jump 1",
//   "Jump 2",
//   "Love!",
// ])
heartDelivery(["2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
])