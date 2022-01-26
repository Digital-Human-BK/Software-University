function rotateArray(array, rotations) {
  for (let i = 0; i < rotations; i++) {
    let temp = array.pop();
    array.unshift(temp);
  }
  return array.join(' ');
}
console.log(rotateArray(
  [
    '1',
    '2',
    '3',
    '4'
  ],
  2
));
console.log(rotateArray(
  [
    'Banana',
    'Orange',
    'Coconut',
    'Apple'
  ],
  15
));