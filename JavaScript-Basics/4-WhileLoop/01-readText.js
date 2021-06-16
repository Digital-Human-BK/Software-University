function readText(input) {
  let index =0;
  while (true) {
    let value = input[index];
    index++;
    if ( value === 'Stop') {
      break;
    }
    console.log(value);
  }
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

