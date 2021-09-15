function oddEvenSum(n) {
  let oddSum = 0;
  let evenSum = 0;

  let digits = n.toString()
  for (let num of digits) {
    num = Number(num)
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }

    
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234))