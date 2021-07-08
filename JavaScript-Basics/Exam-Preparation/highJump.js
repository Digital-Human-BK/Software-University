function highJump(input) {
  let targetHeight = Number(input[0])
  let startHeight = targetHeight - 30;
  let index = 1;
  let counter = 0;
  let jumps = 0;

  let currentHeight = startHeight;

  while (currentHeight <= targetHeight) {
    for (let i = 1; i <= 3; i++) {
      let currentJump = Number(input[index])
      if (currentJump > currentHeight) {
        currentHeight += 5;
        jumps++;
        break;
      } else {
        jumps++;
        counter++;
      }
      index++
    }
    if (counter === 3) {
      console.log(`Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`);
      break;
    }
    counter =0;
    index++;
  }

  if (currentHeight > targetHeight) {
    console.log(`Tihomir succeeded, he jumped over ${currentHeight - 5}cm after ${jumps} jumps.`);
  }
}
highJump(["250",
  "225",
  "224",
  "225",
  "228",
  "231",
  "235",
  "234",
  "235"
])