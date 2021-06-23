function christmas(input) {
  let days = Number(input[0]);
  let index = 1;

  let win = 0;
  let lose = 0;
  let dayMoney = 0;
  let tournamentMoney = 0;
  let dayWin = 0;
  let dayLose = 0;

  for (let day = 1; day <= days; day++) {

    let event = input[index];

    while (event != "Finish") {
      if (event != "win" && event != "lose") {
        index++;
        event = input[index];
        continue;
      }
      switch (event) {
        case "win": win++; dayMoney += 20; break;
        case "lose": lose++; break;
      }
      if (win > lose) {
        dayWin++;
      } else {
        dayLose++;
      }
      index++
      event = input[index];

    }
    index++;
    event = input[index];
    if (win > lose) {
      dayMoney *= 1.1;
      win = 0;
      lose = 0;
    } else {
      win = 0;
      lose = 0;
    }

    tournamentMoney += dayMoney;
    dayMoney = 0;

  }

  if (dayWin > dayLose) {
    console.log(`You won the tournament! Total raised money: ${(tournamentMoney * 1.2).toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${tournamentMoney.toFixed(2)}`);
  }

}
christmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish"
])

