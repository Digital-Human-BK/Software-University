function melrahShake([string, pattern]) {
  while (string.includes(pattern) && pattern.length > 0) {

    if (string.indexOf(pattern) != string.lastIndexOf(pattern)) {

      string = string.replace(pattern, '');
      
      string = string.slice(0, string.lastIndexOf(pattern)) + string.slice(string.lastIndexOf(pattern) + pattern.length);

      let partOne = pattern.slice(0, pattern.length / 2);
      let partTwo = pattern.slice((pattern.length / 2) + 1)
      pattern = partOne+partTwo;
      console.log('Shaked it.');
    } else {
      break;
    }
  }
  console.log('No shake.');
  console.log(string);
}
melrahShake(["astalavista baby",
  "sta"]
)
melrahShake(["##mtm!!mm.mm*mtm.#",
  "mtm"])
