function christmas(input) {
  let days = Number(input[0]);
  let index = 1;

  let win = 0;
  let lose = 0;
  let dayWin = 0;
  let dayLose = 0;
  let dayMoney = 0
  let totalMoney = 0;


  for (let i = 1; i <= days; i++) {
    let command = input[index];
    while (command != "Finish") {
      let currentSport = input[index++];
      let currentResult = input[index++];
      switch (currentResult) {
        case "win": win++; dayMoney += 20; break;
        case "lose": lose++; break;
      }
      command = input[index];
    }
    if (win > lose) {
      dayMoney *= 1.1;
      totalMoney += dayMoney;
      dayMoney = 0;
      win = 0;
      lose = 0;
      dayWin++;
    } else {
      totalMoney += dayMoney;
      dayMoney = 0;
      win = 0;
      lose = 0;
      dayLose++;
    }
    index++;
    command = input[index];
  }

  if (dayWin > dayLose) {
    totalMoney *= 1.2;
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }
}
christmas(["2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish"
])