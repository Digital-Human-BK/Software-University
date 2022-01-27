function magicMatrice(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {

    //calculate row at current index
    let row = matrix[i].reduce((a, b) => a + b);
    result.push(row);

    //calculate column at current index
    let column = 0
    for (let c = 0; c < matrix.length; c++) {
      column += matrix[c][i];
    }
    result.push(column);
  }

  return result.every(x => x === result[0]);
}
console.log(magicMatrice([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
]));
console.log(magicMatrice([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]
]));
console.log(magicMatrice(
  [[1, 0, 0],
  [0, 0, 1],
  [0, 1, 0]
  ]));