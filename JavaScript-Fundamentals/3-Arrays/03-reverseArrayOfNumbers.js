function reverse(n, arr) {
  newArr = []
  n = n - 1;
  for (let i = n; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}
reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])