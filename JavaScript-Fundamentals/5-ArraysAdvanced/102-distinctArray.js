function distinct(array) {
  let result = [];

  array.forEach(n => {
    if (!result.includes(n)) {
      result.push(n);
    }
  });
  console.log(result.join(" "));
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([1, 2, 3, 4]);
