function sameNumbers(n){

  let numArr = n.toString().split('');  
  let isSame = numArr.every(x => x == numArr[0]);
  
  if (isSame){
    console.log('true');
  } else {
    console.log('false');
  }
  console.log(numArr.reduce((a, b) => Number(a) + Number(b)));
}
sameNumbers(2222222)
sameNumbers(1234)