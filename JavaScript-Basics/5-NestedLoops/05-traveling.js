function trip(input) {
  let index = 0;
  let command = input[index];

  while (command != "End") {
    let name = input[index++];
    let target = Number(input[index++]);
    let currentMoney = Number(input[index++]);
    let sum = 0;
    while (sum < target) {
      sum += currentMoney;
      currentMoney = Number(input[index++]);
    }
    if (sum >= target) {
      console.log(`Going to ${name}!`);
      sum = 0;
      index--;
    }
    command = input[index];
  }
}
trip(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
