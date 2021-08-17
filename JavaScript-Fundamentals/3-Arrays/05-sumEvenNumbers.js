function sumEven(arr) {
  let sum = 0;
  for ( let i =0;i<arr.length;i++){
    let currentNum = Number(arr[i])
    if (currentNum % 2 === 0) {
       sum+=currentNum;
    }
  }
  console.log(sum);
}
sumEven(['1','2','3','4','5','6'])
sumEven(['3','5','7','9'])
sumEven(['2','4','6','8','10'])