function equalArr(arrOne, arrTwo) {
  let sum = 0;
  let equal = true;
  for (let i = 0; i < arrOne.length; i++) {
    let one = Number(arrOne[i])
    let two = Number(arrTwo[i])
    if (one === two) {
      sum += one;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      equal = false;
      break;
    }
  }
  if (equal) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }

}
equalArr(['10', '20', '30'], ['10', '20', '30'])
equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArr(['1'], ['10'])