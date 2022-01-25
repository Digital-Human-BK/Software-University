function addRemoveElements(array) {
  let num = 1;
  let result = [];

  for (const element of array) {
    if (element == 'add') {
      result.push(num);
    } else if (element == 'remove') {
      result.pop();
    }
    num++;
  }
  return result.length > 0 ? result.join('\n') : 'Empty';
}
console.log(addRemoveElements([
  'add',
  'add',
  'add',
  'add'
]));
console.log(addRemoveElements([
  'add',
  'add',
  'remove',
  'add',
  'add'
]));
console.log(addRemoveElements([
  'remove',
  'remove',
  'remove'
]));