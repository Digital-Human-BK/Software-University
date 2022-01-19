function negativePositive(arr) {
  let result = [];

  for (const num of arr) {
    if (num < 0) {
      result.unshift(num)
    } else {
      result.push(num)
    }
  }
  return result;
}
console.log(negativePositive([7, -2, 8, 9]));
console.log(negativePositive([3, -2, 0, -1]));