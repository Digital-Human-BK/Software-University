function arrayManipulator(array, commands) {
  for (let i = 0; i < commands.length; i++) {

    let command = commands[i].split(" ").shift()
    let commandArray = commands[i].split(" ").slice(1);

    switch (command) {
      case "add":
        add(array, commandArray);
        break;
      case "addMany":
        addMany(array, commandArray);
        break;
      case "contains":
        contains(array, commandArray);
        break;
      case "remove":
        remove(array, commandArray);
        break;
      case "shift":
        shiftPositions(array, commandArray);
        break;
      case "sumPairs":
        sumPairs(array);
        break;
      case "print":
        console.log(`[ ${array.join(", ")} ]`);
        break;
    }
    function add(array, commandArray) {
      let index = Number(commandArray[0]);
      let el = Number(commandArray[1]);
      array.splice(index, 0, el);
    }
    function addMany(array, commandArray) {
      let index = Number(commandArray.shift());
      let elements = commandArray.slice().map(Number);
      for (const item of elements) {
        array.splice(index, 0, item)
        index++;
      }
    }
    function contains(array, commandArray) {
      let element = Number(commandArray[0]);
      if (array.includes(element)) {
        console.log(array.indexOf(element));
      } else {
        console.log(-1);
      }
    }
    function remove(array, commandArray) {
      let index = Number(commandArray[0]);
      array.splice(index, 1);
    }
    function shiftPositions(array, commandArray) {
      let turns = Number(commandArray[0]);
      for (let i = 0; i < turns; i++) {
        let move = array.shift()
        array.push(move);
      }
    }
    function sumPairs(array) {
      let newArray = []
      for (let i = 0; i < array.length; i += 2) {
        let a = Number(array[i]);
        let b = Number(array[i + 1]);
        let pairSum = 0;
        if ((i + 1) >= array.length) {
          pairSum = a;
          newArray.push(pairSum);
        } else {
          pairSum = a + b;
          newArray.push(pairSum)
        }
      }
      array.splice(0,array.length)
      for (let i =0;i<newArray.length;i++){
        let element = Number(newArray[i]);
        array.splice(i,1,element);
      }
    }
  }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
// arrayManipulator([2, 2, 4, 2, 4],  ["add 1 4", "sumPairs", "print"])
// arrayManipulator([1, 2, 4, 5, 6, 7],
//   ['add 1 8', 'contains 1', 'contains 3', 'print']
// )
// arrayManipulator([1, 2, 3, 4, 5],
//   ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// )