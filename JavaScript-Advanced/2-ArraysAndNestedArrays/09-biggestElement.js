function biggestEllement(matrix) {
  let result =[];
  for (const array of matrix) {
    result.push(Math.max(...array))
  }
  return Math.max(...result);
}
console.log(biggestEllement([
  [20, 50, 10],
  [8, 33, 145]
]));
console.log(biggestEllement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4]
]));