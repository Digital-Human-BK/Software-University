function processOddPositions(arr){
  let result = [];
  for (let i = 1; i < arr.length; i+=2) {
    const num = arr[i] * 2;
    result.unshift(num);
  }
  return result
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));