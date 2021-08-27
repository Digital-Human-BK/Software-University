function magicSum(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const first = array[i]
      const second = array[j]
      if (first + second == num) {
        console.log(`${first} ${second}`);
      }
    }
  }
}
// magicSum([1, 7, 6, 2, 19, 23], 8)
// magicSum([14, 20, 60, 13, 7, 19, 8], 27)
// magicSum([1, 2, 3, 4, 5, 6], 6)
magicSum([6, 5, 3, 4, 3, 3], 7)