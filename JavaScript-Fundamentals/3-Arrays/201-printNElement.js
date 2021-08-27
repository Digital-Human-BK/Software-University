function printN(array) {
  let step = Number(array.pop());
  let result = [];
  for (let i = 0; i < array.length; i += step) {
    result.push(array[i]);
  }
  console.log(result.join(" "));
}
printN(['5', '20', '31', '4', '20', '2'])
printN(['dsa', 'asd', 'test', 'test', '2'])
printN(['1', '2', '3', '4', '5', '6'])