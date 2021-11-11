function asciiSimulator([a, b, string]) {
  let start = a.charCodeAt();
  let end = b.charCodeAt();
  let temp = start;
  if (start > end) {
    start = end;
    end = temp;
  }

  let sum = 0;

  for (const char of string) {
    let code = char.charCodeAt()
    if (code > start && code < end){
      sum +=code;
    }
  }
  console.log(sum);
}
asciiSimulator([
  ".",
  "@",
  "dsg12gr5653feee5"
])
asciiSimulator([
  "?",
  "E",
  "@ABCEF"
])
asciiSimulator([
  "a",
  "1",
  "jfe392$#@j24ui9ne#@$"
])