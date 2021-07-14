function tennis(input) {
  let tournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let points = 0;
  let index = 2;
  let tournamentsWin = 0;

  for (let i = 0; i < tournaments; i++) {
    let result = input[index++];
    if (result === "W") {
      points += 2000;
      tournamentsWin++;
    } else if (result === "F") {
      points += 1200;
    } else if (result === "SF") {
      points += 720;
    }
  }

  let averageScore = points / tournaments;
  let successRate = (tournamentsWin / tournaments) * 100;

  console.log(`Final points: ${points + startingPoints}`);
  console.log(`Average points: ${Math.floor(averageScore)}`);
  console.log(`${successRate.toFixed(2)}%`);
}
tennis(["5",
  "1400",
  "F",
  "SF",
  "W",
  "W",
  "SF"])
