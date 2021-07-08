function gym(input) {
  let visitors = Number(input[0])

  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;

  let proteinShake = 0;
  let proteinBar = 0;

  for (let i = 1; i < input.length; i++) {
    let currentActivity = input[i];
    if (currentActivity === "Back") {
      back++;
    } else if (currentActivity === "Chest") {
      chest++;
    } else if (currentActivity === "Legs") {
      legs++;
    } else if (currentActivity === "Abs") {
      abs++;
    } else if (currentActivity === "Protein bar") {
      proteinBar++;
    } else if (currentActivity === "Protein shake") {
      proteinShake++;
    }
  }
  let workout = back + chest + legs + abs;
  let buy = proteinBar + proteinShake;

  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${(workout / visitors * 100).toFixed(2)}% - work out`);
  console.log(`${(buy / visitors * 100).toFixed(2)}% - protein`);
}


gym(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"])