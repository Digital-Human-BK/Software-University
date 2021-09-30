function manipulate(commands) {
  let arr = commands
    .shift()
    .split(" ")
    .map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
      case "Add" : function add(el){arr.push(el)}
      add(firstNum);
        break;
      case "Remove": function remove(num) {arr = arr.filter(el => el !==num)};
      remove(firstNum);
        break;
      case "RemoveAt": function removeAt(index) { arr.splice(index, 1)}
      removeAt(firstNum);
        break;
        case "Insert": function insert(num, index) {arr.splice(index, 0, num)}
        insert(firstNum, secondNum);
        break;      
    }
  }

  console.log(arr.join(" "));  
}
manipulate(['4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3'])