function prepend(arr){
  let result =[];
  for (const digit of arr) {
    if (digit < 0) {
      result.unshift(digit)
    } else {
      result.push(digit);
    }   
  }
  return result.join("\n");
}
console.log(prepend([3, -2, 0, -1]));