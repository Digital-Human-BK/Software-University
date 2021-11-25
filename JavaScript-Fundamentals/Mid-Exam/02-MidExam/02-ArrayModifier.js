function arrayModifier(array) {
  let integers = array
    .shift()
    .split(" ")
    .map(Number);

  for (const line of array) {
    let [command, indexOne, indexTwo] = line.split(" ");
    indexOne = Number(indexOne);
    indexTwo = Number(indexTwo);

    if (command == "end") {
      break;
    }
    swap(integers, command, indexOne, indexTwo);
    multiply(integers, command, indexOne, indexTwo);
    decrease(integers, command);
  }
  console.log(integers.join(", "));


  function swap(array, command, indexOne, indexTwo) {
    if (command == "swap") {
      let first = array[indexOne];
      let second = array[indexTwo];
      array[indexOne] = second;
      array[indexTwo] = first;
    }
  }
  function multiply(array, command, indexOne, indexTwo) {
    if (command == "multiply") {
      let first = array[indexOne];
      let second = array[indexTwo];
      array[indexOne] = first * second;
    }
  }
  function decrease(array, command) {
    if (command == "decrease") {
      array.forEach((element, index) => {
        array[index] = element - 1;
      });
    }
  }
}
arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]);
arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]);