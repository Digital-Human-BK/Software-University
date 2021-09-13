function smallestOfThree(a, b, c) {
  let smallest = Number.MAX_SAFE_INTEGER;

  function smaller(n, small) {
    if (n < small) {
      small = n;
    }
    return small;
  }
  smallest = smaller(a, smallest);
  smallest = smaller(b, smallest);
  smallest = smaller(c, smallest);

  return smallest;
}
console.log(smallestOfThree(2, 5, 3));
console.log(smallestOfThree(600, 342, 123));
console.log(smallestOfThree(25, 21, 4));