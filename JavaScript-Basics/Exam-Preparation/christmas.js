function christmas(input) {
  let n = Number(input[0])
  let m = Number(input[1])
  let s = Number(input[2])

  let printLine = "";

  for (let i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i == s) {
        break;
      }
      printLine += `${i} `
    }
  }
  console.log(printLine);
}
christmas(["1",
  "36",
  "12"])
