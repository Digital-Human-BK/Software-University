function valueOfString([string, condition]) {
  let sum =0;
  condition == 'UPPERCASE' ? sum = uppercase(string) : sum = lowerCase(string);
  console.log(`The total sum is: ${sum}`);

  function uppercase(string) {
    let sum = 0;
    for (const char of string) {
      let code = char.charCodeAt()
      if (code >= 65 && code <= 90) {
        sum+=code;
      }
    }
    return sum;
  }

  function lowerCase(string) {
    let sum = 0;
    for (const char of string) {
      let code = char.charCodeAt()
      if (code >= 97 && code <= 122) {
        sum+=code;
      }
    }
    return sum;
  }
}
valueOfString([
  "AC/DC",
  "UPPERCASE"
])
valueOfString([
  "HelloFromMyAwesomePROGRAM",
  "LOWERCASE"
])