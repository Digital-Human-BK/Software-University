function squareOfStars(n = 5) {
  for (let i = 0; i < n; i++) {
    console.log('* '.repeat(n));
  }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();