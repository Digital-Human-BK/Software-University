function increasingSubseq(array) {
  let temp = array[0];
  let result = [];

  for (const num of array) {
    if (num >= temp) {
      result.push(num);
      temp = num;
    }
  }
  return result;
}
console.log(increasingSubseq([
  1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24]
));
console.log(increasingSubseq([
  1,
  2,
  3,
  4]
));
console.log(increasingSubseq([
  20,
  3,
  2,
  15,
  6,
  1]
));