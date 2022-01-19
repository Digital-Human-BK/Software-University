function smallestTwoNums(arr){
  arr.sort((a, b) => a - b);
  return arr[0] + ' ' + arr[1];
}
console.log(smallestTwoNums([30, 15, 50, 5]));
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));