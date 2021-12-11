function inventory(input) {
  let journal = input.shift().split(", ");
  let line;
  while ((line = input.shift()) != "Craft!") {
    let [action, item] = line.split(" - ");
    switch (action) {
      case "Collect": collect(journal, item); break;
      case "Drop": drop(journal, item); break;
      case "Combine Items": combine(journal, item); break;
      case "Renew": renew(journal, item); break;
    }
  }

  console.log(journal.join(", "));

  function collect(journal, item) {
    if (!journal.includes(item)) {
      journal.push(item);
    }
  }
  function drop(journal, item) {
    if (journal.includes(item)) {
      journal.splice(journal.indexOf(item), 1);
    }
  }
  function combine(journal, items) {
    let [oldItem, newItem] = items.split(":");
    if (journal.includes(oldItem)){
      journal.splice(journal.indexOf(oldItem)+1, 0, newItem);
    }
  }
  function renew(journal, item){
    if (journal.includes(item)){
      journal.splice(journal.indexOf(item), 1);
      journal.push(item);
    }
  }
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]
)