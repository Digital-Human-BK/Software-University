function numbers(string) {
  let array = string.split(" ").map(Number);
  let average = array.reduce((a, b) => a + b) / array.length;
  let result = array.filter(x => x > average).sort((a, b) => b - a);
  if (result.length > 5) {
    result.length = 5
  }
  result.length ? console.log(result.join(" ")) : console.log("No");
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')