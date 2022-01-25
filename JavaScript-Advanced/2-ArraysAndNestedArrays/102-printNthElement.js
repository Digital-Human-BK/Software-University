function printNthElement(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i +=n) {
    result.push(array[i]);
  }
  return result;
}
console.log(printNthElement(
  [
    '5',
    '20',
    '31',
    '4',
    '20'
  ],
  2
));
console.log(printNthElement(
  [
    'dsa',
    'asd',
    'test',
    'tset'
  ],
  2
));
console.log(printNthElement(
  [
    '1',
    '2',
    '3',
    '4',
    '5'
  ],
  6
));