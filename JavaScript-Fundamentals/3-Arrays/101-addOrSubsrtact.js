function addSub(arr) {
  let initialSum = 0;
  let modifiedSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = Number(arr[i])
    if (currentNum % 2 === 0) {
      initialSum+=currentNum;
      currentNum += i;
      modifiedSum+=currentNum;
    } else {
      initialSum+=currentNum;
      currentNum -= i;
      modifiedSum+=currentNum;
    }
    arr[i] = currentNum;
  }
  console.log(arr);
  console.log(initialSum);
  console.log(modifiedSum);
}
addSub([5, 15, 23, 56, 35])
addSub([-5, 11, 3, 0, 2])