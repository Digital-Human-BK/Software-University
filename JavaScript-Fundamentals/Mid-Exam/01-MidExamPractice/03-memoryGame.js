function memoryGame(array) {
  let board = array
    .shift()
    .split(" ");

  let moves = 0;

  for (const pair of array) {
    if (board.length == 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    if (pair == "end") {
      if (board.length > 0) {
        console.log(`Sorry you lose :(
${board.join(" ")}`);
      }
      break;
    }
    let [indexA, indexB] = pair.split(" ").map(Number);
    let addElement;
    moves++;

    if (
      indexA == indexB
      || indexA >= board.length
      || indexB >= board.length
      || indexA < 0
      || indexB < 0
    ) {
      addElement = `-${moves}a`
      console.log("Invalid input! Adding additional elements to the board");
      board.splice(board.length / 2, 0, addElement, addElement);
      continue;
    }

    if (board[indexA] == board[indexB]) {
      console.log(`Congrats! You have found matching elements - ${board[indexA]}!`);
      if (indexA > indexB) {
        board.splice(indexA, 1);
        board.splice(indexB, 1);
      } else {
        board.splice(indexB, 1);
        board.splice(indexA, 1);
      }
    } else {
      console.log("Try again!");
    }
  }
}

memoryGame([
  "1 1 2 2 3 3 4 4 5 5",
  "1 0",
  "-1 0",
  "1 0",
  "1 0",
  "1 0",
  "end"
])
memoryGame([
  "a 2 4 a 2 4",
  "0 3",
  "0 2",
  "0 1",
  "0 1",
  "end"
])
memoryGame([
  "a 2 4 a 2 4",
  "4 0",
  "0 2",
  "0 1",
  "0 1",
  "end"
])