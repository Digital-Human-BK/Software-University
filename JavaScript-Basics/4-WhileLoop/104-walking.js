function steps(input) {
  let target = 10000;
  let index = 0;

  let totalSteps = 0;

  let counter = input[index];
  while ( counter !== "Going home") {
    let steps = Number(input[index]);
    totalSteps +=steps;
    if(totalSteps >= target) {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - target} steps over the goal!`);
      break;
    }
    index++;
    counter = input[index];    
  }
  if (counter === "Going home") {
    index++;
    counter = input[index];
    totalSteps = totalSteps + Number(counter);
    if (totalSteps >= target) {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - target} steps over the goal!`);
    } else {
      console.log(`${target - totalSteps} more steps to reach goal.`);
    }
  }
  
}
steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])

