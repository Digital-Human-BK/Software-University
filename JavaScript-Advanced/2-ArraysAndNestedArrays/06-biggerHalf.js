function biggerHalf(arr) {
  arr.sort((a, b) => a - b);
  let middle = Math.floor(arr.length / 2);
  return arr.slice(middle);
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));