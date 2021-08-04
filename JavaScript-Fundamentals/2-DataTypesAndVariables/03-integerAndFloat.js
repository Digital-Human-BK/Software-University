function intFloat(fNum, sNum, tNum) {
  let sum = fNum + sNum + tNum;
  sum % 1 === 0 ? sum+= " - Integer" : sum += " - Float"
  console.log(sum);
}
intFloat(9, 100, 1.1)
intFloat(100, 200, 303)