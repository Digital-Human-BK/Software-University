function gameNumbers(input) {
  let playerOne = input[0];
  let playerTwo = input[1];
  let index = 2;
  let command = input[index];

  let pointsPlayerOne = 0;
  let pointsPlayerTwo = 0;

  while (command != "End of game") {
    let cardPlayerOne = Number(input[index++]);
    let cardPlayerTwo = Number(input[index++]);

    if (cardPlayerOne > cardPlayerTwo) {

      pointsPlayerOne += cardPlayerOne - cardPlayerTwo;

    } else if (cardPlayerTwo - cardPlayerOne) {

      pointsPlayerTwo += cardPlayerTwo - cardPlayerOne;

    } else if (cardPlayerOne === cardPlayerTwo) {

      console.log("Number wars!");
      cardPlayerOne = Number(input[index++]);
      cardPlayerTwo = Number(input[index]);

      if (cardPlayerOne > cardPlayerTwo) {
        console.log(`${playerOne} is winner with ${pointsPlayerOne} points`);
      } else if (cardPlayerTwo > cardPlayerOne) {
        console.log(`${playerTwo} is winner with ${pointsPlayerTwo} points`);
      }
      break;
    }
    command = input[index];
  }
  if (command === "End of game") {
    console.log(`${playerOne} has ${pointsPlayerOne} points`);
    console.log(`${playerTwo} has ${pointsPlayerTwo} points`);
  }
}
gameNumbers(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])

