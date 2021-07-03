function easter(input) {
  let players = Number(input[0])
  let index = 1;
  let command = input[index];

  let counter = 1;
  let playerName = ""
  let maxScore = 0;
  let score = 0;

  while (counter <= players) {
    let currentPlayer = input[index++];

    while (command != "Stop") {
      let currentScore = Number(input[index++]);
      score += currentScore;

      command = input[index];
    }

    if (score > maxScore) {
      maxScore = score
      playerName = currentPlayer;
      console.log(`${playerName} has ${score} points.`);
      console.log(`${playerName} is the new number 1!`);
    } else {
      console.log(`${currentPlayer} has ${score} points.`);
    }

    score = 0;
    counter++;
    index++;
    command = input[index];
  }
  console.log(`${playerName} won competition with ${maxScore} points!`);
}
easter(["2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop"])