function shopping(input) {
  let budget = Number(input[0])
  let gpu = Number(input[1])
  let cpu = Number(input[2])
  let ram = Number(input[3])

  let gpuTotal = gpu * 250
  let cpuPrice = gpuTotal * 0.35
  let ramPrice = gpuTotal * 0.1

  let cpuTotal = cpuPrice * cpu
  let ramTotal = ramPrice * ram

  let billTotal = gpuTotal + cpuTotal + ramTotal

  if (cpu < gpu) {
    billTotal*= 0.85
  }

  if (budget >= billTotal) {
    console.log(`You have ${(budget - billTotal).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(billTotal - budget).toFixed(2)} leva more!`);
  }


}


shopping(["920.45",
"3",
"1",
"1"])
