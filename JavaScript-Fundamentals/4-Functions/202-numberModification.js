function numMod(num){
  
  let numArray = num.toString().split("").map(Number);
  let average = numArray.reduce((a,b)=> a+b) / numArray.length;

  while (average < 5) {
    numArray.push(9);

    average = numArray.reduce((a,b)=> a+b) / numArray.length;
  }
  console.log(numArray.join(""));  

}
numMod(101)
numMod(5835)