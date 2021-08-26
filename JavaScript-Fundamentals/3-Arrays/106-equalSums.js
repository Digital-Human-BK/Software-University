function equalSums(array) {
  let isSatisfied = true;
  for (let i = 0; i < array.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let left = 0; left < i; left++) {
      let leftDigit = array[left]
      sumLeft += leftDigit
    }
    for (let right = array.length - 1; right > i; right--) {
      let rightDigit = array[right]
      sumRight += rightDigit;
    }
    if (sumRight == sumLeft) {
      console.log(i);
      isSatisfied = false
      break;
    }
  }
  if (isSatisfied) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])