function leapYear(input) {
  let startYear = Number(input[0]);
  let endYear = Number(input[1]);

  for (let i = startYear; i <= endYear; i+=4) {
      console.log(i);
  }
}
leapYear(['1908', '1919'])