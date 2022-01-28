function ticTacToe(moves) {
  // initial board
  let board = [
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
  ];

  //set game result
  let isDraw = true;
  let adjustment = 0;
  let firstSign = 'X'
  let secondSign = 'O'
  //iterating over every turn
  for (let i = 0; i < moves.length; i++) {
    
    let [x, y] = moves[i].split(' ').map(Number);

    if (board[x][y] !== 'false') {
      console.log("This place is already taken. Please choose another!");
      adjustment++;
      if (adjustment % 2 == 0) {
        firstSign = 'X'
        secondSign = 'O'
      } else {
        firstSign = 'O'
        secondSign = 'X'
      }
      continue;
    }

    if (i % 2 == 0) {
      board[x][y] = firstSign;
    } else {
      board[x][y] = secondSign;
    }

    if (winningRow(board) || winningColumn(board) || winningDiagonal(board)) {
      for (const row of board) {
        console.log(row.join('\t'));
      }
      isDraw = false;
      break;
    }

    let isMoreTurns = board.some(row => row.includes('false'));
    if (isMoreTurns == false) {
      break;
    } 
  }
  //Chech for draw
  if (isDraw) {
    console.log("The game ended! Nobody wins :(");
    for (const row of board) {
      console.log(row.join('\t'));
    }
  }

  //functions

  //check rows
  function winningRow(board) {
    for (const row of board) {
      if (row.every(i => i == 'X') || row.every(i => i == 'O')) {
        console.log(`Player ${row[0]} wins!`);
        return true;
      }
    }
    return false;
  }

  //check columns
  function winningColumn(board) {
    for (let x = 0; x < board.length; x++) {
      let column = []
      for (let y = 0; y < board.length; y++) {
        column.push(board[y][x]);
      }
      if (column.every(i => i == 'X') || column.every(i => i == 'O')) {
        console.log(`Player ${column[0]} wins!`);
        return true;
      }
    }
    return false;
  }

  //check main diagonal
  function winningDiagonal(board) {
    let mainD = [];
    for (let i = 0; i < board.length; i++) {
      mainD.push(board[i][i]);
    }

    let secondaryD = [];
    for (let i = 0; i < board.length; i++) {
      secondaryD.push(board[i][board.length - 1 - i]);
    }

    if (mainD.every(e => e == 'X')
      || mainD.every(e => e == 'O')
      || secondaryD.every(e => e == 'X')
      || secondaryD.every(e => e == 'O')) {

      console.log(`Player ${board[1][1]} wins!`)
      return true;
    }
    return false;
  }

}
// ticTacToe([
//   "0 1",
//   "0 0",
//   "0 2",
//   "2 0",
//   "1 0",
//   "1 1",
//   "1 2",
//   "2 2",
//   "2 1",
//   "0 0"]
// )
// console.log(`=================`);
// ticTacToe([
//   "0 0",
//   "0 0",
//   "1 1",
//   "0 1",
//   "1 2",
//   "0 2",
//   "2 2",
//   "1 2",
//   "2 2",
//   "2 1"]
// )
// console.log(`=================`);
ticTacToe(
  ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)