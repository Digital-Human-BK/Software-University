function sortingNumbers(array) {
  let result = [];
  let n = array.length;

  array.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      result.push(array.shift());
    } else {
      result.push(array.pop());
    }
  }
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
