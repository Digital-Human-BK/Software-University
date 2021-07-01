function bestPlayer(input){
  let index =0;
  let command = input[index];

  let maxScore = 0;
  let player = "";

  while(command != "END") {
    let currentPlayer = input[index++]
    let currentScore = Number(input[index++])
    
    if (currentScore > maxScore) {
      maxScore = currentScore;
      player = currentPlayer;
    }

    if (currentScore >=10) {
      break;
    }

    command = input[index];
  }
  console.log(`${player} is the best player!`);
  if (maxScore >=3) {
    console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxScore} goals.`);
  }
}


bestPlayer(["Petrov",
"2",
"Drogba",
"11"])



