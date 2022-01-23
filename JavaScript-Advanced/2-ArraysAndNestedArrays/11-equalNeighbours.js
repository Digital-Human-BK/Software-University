function equalNeighbours(matrix) {
  let pair = 0;
  for (let i = 0; i < matrix.length; i++) {

    for (let y = 0; y < matrix[i].length; y++) {

      if (i == matrix.length - 1) {
        break;
      }

      let top = matrix[i][y];
      let bottom = matrix[i + 1][y];
      if (top == bottom) {
        pair += 1;
      }
    }

    for (let x = 0; x < matrix[i].length - 1; x++) {
      let left = matrix[i][x];
      let right = matrix[i][x + 1];
      if (left == right) {
        pair += 1;
      }
    }
  }
  
  return pair;
}
console.log(equalNeighbours([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]));
console.log(equalNeighbours([
  ['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbours([
  ['test', 'yes', 'yo', 'ho'],
  ['well', 'done', 'yo', '6'],
  ['not', 'done', 'yet', '5']
]));