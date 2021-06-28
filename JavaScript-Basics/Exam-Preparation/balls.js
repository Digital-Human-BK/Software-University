function balls(input) {
  let num = Number(input[0])

  let totalPoints = 0;
  let red = 0;
  let orange = 0;
  let yellow=0;
  let white=0;
  let black=0;
  let other=0;

  for (let i = 1; i <= num; i++) {
    let currentColor = input[i];
    if (currentColor === "red") {
      totalPoints += 5;
      red++;
    } else if (currentColor === "orange") {
      totalPoints += 10;
      orange++;
    } else if (currentColor === "yellow") {
      totalPoints += 15;
      yellow++;
    } else if (currentColor === "white") {
      totalPoints += 20;
      white++;
    } else if (currentColor === "black") {
      totalPoints /= 2;
      black++;
    } else {
      other++;
    }
  }
  console.log(`Total points: ${Math.floor(totalPoints)}`);
  console.log(`Points from red balls: ${red}`);
  console.log(`Points from orange balls: ${orange}`);
  console.log(`Points from yellow balls: ${yellow}`);
  console.log(`Points from white balls: ${white}`);
  console.log(`Other colors picked: ${other}`);
  console.log(`Divides from black balls: ${black}`);
}
balls(["10","white", "white", "ee", "red", "orange", "red", "black", "black", "black", "black"])