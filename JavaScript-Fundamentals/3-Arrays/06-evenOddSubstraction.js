function evenOdd(arr) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}
evenOdd([1, 2, 3, 4, 5, 6])
evenOdd([3, 5, 7, 9])
evenOdd([2, 4, 6, 8, 10])