function firstLast(arr) {
  let first = Number(arr[0]);
  let second = Number(arr.pop());
  return first + second;
}
console.log(firstLast(["10", "5"]));