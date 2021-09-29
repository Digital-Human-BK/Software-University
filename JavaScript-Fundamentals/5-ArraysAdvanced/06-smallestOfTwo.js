function smallestOfTwo(arr) {
  let ascendSorting = arr.sort((a,b) => a- b);
  let result = ascendSorting.slice(0,2)
  return result.join(" ")
}
console.log(smallestOfTwo([30, 15, 50, 5]));