function darts(input) {
  let name = input[0];
  let index = 1;
  let command = input[index];

  let startingPoints = 301;
  let successful = 0;
  let unsuccessful = 0;


  while (command != "Retire") {
    let shotType = input[index++];
    let points = Number(input[index++]);

    switch (shotType) {
      case "Single": points *= 1; break;
      case "Double": points *= 2; break;
      case "Triple": points *= 3; break;
    }

    if (startingPoints - points > 0) {
      startingPoints-=points;
      successful++;
    } else if ( startingPoints - points < 0) {
      unsuccessful++;
    } else if (startingPoints - points === 0) {
      successful++;
      console.log(`${name} won the leg with ${successful} shots.`);
      break;
    }

    command = input[index];
  }
  if (command === "Retire") {
    console.log(`${name} retired after ${unsuccessful} unsuccessful shots.`);
  }

}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])

