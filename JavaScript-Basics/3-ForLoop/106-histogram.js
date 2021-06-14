function histogram(input) {
  let numsCount = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (i = 1; i <= numsCount; i++) {

    let currentNumber = Number(input[i]);

    if (currentNumber < 200) {
      p1 += 1;
    } else if (currentNumber <= 399) {
      p2 += 1;
    } else if (currentNumber <= 599) {
      p3 += 1;
    } else if (currentNumber <= 799) {
      p4 += 1;
    } else {
      p5 += 1;
    }
  }

  console.log(`${(p1/numsCount*100).toFixed(2)}%`);
  console.log(`${(p2/numsCount*100).toFixed(2)}%`);
  console.log(`${(p3/numsCount*100).toFixed(2)}%`);
  console.log(`${(p4/numsCount*100).toFixed(2)}%`);
  console.log(`${(p5/numsCount*100).toFixed(2)}%`);
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
