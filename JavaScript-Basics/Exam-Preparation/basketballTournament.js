function basketball(input) {
  let index = 0;
  let command = input[index];

  let gamesCount = 0;
  let tempGamesCount = 0;

  let win = 0;
  let lose = 0;

  while (command != "End of tournaments") {
    let tournamentName = input[index++];
    let numOfGames = Number(input[index++])
    for (let i = 1; i <= numOfGames; i++) {
      let teamDesi = Number(input[index++]);
      let teamEnemy = Number(input[index++]);
      if (teamDesi > teamEnemy) {
        win++;
        gamesCount++;
        tempGamesCount++;
        console.log(`Game ${tempGamesCount} of tournament ${tournamentName}: win with ${teamDesi - teamEnemy} points.`);
      } else if (teamEnemy > teamDesi) {
        lose++;
        gamesCount++;
        tempGamesCount++;
        console.log(`Game ${tempGamesCount} of tournament ${tournamentName}: lost with ${teamEnemy - teamDesi} points.`);
      }
    }
    tempGamesCount = 0;
    command = input[index];
  }
  console.log(`${(win / gamesCount * 100).toFixed(2)}% matches win`);
  console.log(`${(lose / gamesCount * 100).toFixed(2)}% matches lost`);
}
basketball(["Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments"])
