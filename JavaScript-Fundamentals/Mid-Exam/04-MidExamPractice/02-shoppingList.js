function shoppingList(array) {
  let list = array.shift().split("!");

  for (const line of array) {
    if (line === "Go Shopping!") {
      console.log(list.join(", "));
      break;
    }
      let [command, item, newItem] = line.split(" ");

      switch (command) {
        case "Urgent": urgent(item); break;
        case "Unnecessary": unnecessary(item); break;
        case "Correct": correct(item, newItem); break;
        case "Rearrange": rearrange(item); break;
      }
  }
  function urgent(item) {
    if (!list.includes(item)) {
      list.unshift(item);
    }
  }
  function unnecessary(item) {
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
    }
  }
  function correct(item, newItem) {
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1, newItem);
    }
  }
  function rearrange(item) {
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
      list.push(item);
    }
  }
}
shoppingList(["Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"])
console.log("=============");
shoppingList(["Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
])