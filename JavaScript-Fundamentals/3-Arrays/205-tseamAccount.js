function tseamAccount(array) {
  let games = array.shift().split(" ");

  for (const line of array) {

    let [command, game] = line.split(" ");

    if (command == "Play!") {
      console.log(games.join(" "));
      break;
    }
    switch (command) {
      case "Install":
        if (!games.includes(game)) {
          games.push(game);
        }
        break;
      case "Uninstall":
        if (games.includes(game)) {
          games.splice(games.indexOf(game), 1);
        }
        break;
      case "Update" :
        if (games.includes(game)) {
          games.splice(games.indexOf(game), 1);
          games.push(game);
        }
        break;
      case "Expansion":
        let [name, expansion] = game.split("-");
        if (games.includes(name)){
          games.splice(games.indexOf(name) + 1, 0, `${name}:${expansion}`);
        }  
        break;
    }
  }
}
tseamAccount(['CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!']
)
tseamAccount(['CS WoW Diablo',
  'Uninstall XCOM',
  'Update PeshoGame',
  'Update WoW',
  'Expansion Civ-V',
  'Play!']
)