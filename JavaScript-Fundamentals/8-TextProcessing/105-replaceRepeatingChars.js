function replaceRepeatingChars(string) {
  let n = string.length;

  let result = [];

  for (let i = 0; i < n; i++) {
    if (string[i+1] != string[i]) {
      result.push(string[i])
    }
  }
  console.log(result.join(""));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');