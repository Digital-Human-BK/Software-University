function gift(input){
  let index = 0;
  let command = input[index];

  let kids = 0;
  let adults = 0;
  let moneyToys=0;
  let moneyJumpers=0

  while (command != "Christmas") {
    let currnetAge = Number(input[index++]);

    if (currnetAge <=16) {
      kids++;
      moneyToys+=5;
    } else {
      adults++;
      moneyJumpers+=15;
    }
    command=input[index];
  }
  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${moneyToys}`);
  console.log(`Money for sweaters: ${moneyJumpers}`);
}
gift(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
