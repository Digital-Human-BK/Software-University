function sign(numOne, numTwo, numThree) {
  let result ="";
  if (numOne >= 0 && numTwo >=0 && numThree >=0){
    result = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
    result ="Negative";
  }
  console.log(result);
}
sign(5,
  12,
  -15
  )
sign(6,
  -12,
  14
  )
sign(-1,
  -2,
   -3
  )
 sign(-1,
  0,
 1
 ) 