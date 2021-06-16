function sumOfNums(input) {
  let index = 0;
  let maxSum = Number(input[index]);
  index++;
  let sum = 0;
  while (true) {
    let num = Number(input[index]);
    sum +=num;
    if ( sum >= maxSum) {
      console.log(sum);
      break;
    }
    index++;
  }
  
}
sumOfNums(["100",
  "10",
  "20",
  "30",
  "40"])
