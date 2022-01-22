function diagonalSum(matrix) {
  let result = [];

  let mainSum = 0;
  for (let i = 0; i< matrix.length;i++) {
    mainSum += matrix[i][i];
  }

  result.push(mainSum);

  let secondarySum = 0;
  for (let i = 0; i < matrix.length; i++) {
    secondarySum+= matrix[i][matrix.length - 1 - i];
  }
  result.push(secondarySum);

  return result.join(' ');
}
console.log(diagonalSum([
  [20, 40],
  [10, 60]
]));
console.log(diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89]
]));
