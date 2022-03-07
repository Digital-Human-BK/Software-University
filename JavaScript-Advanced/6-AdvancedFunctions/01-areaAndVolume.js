function area() {
  return Math.abs(this.x * this.y);
};

function vol() {
  return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
  const result = JSON.parse(input).map(element => {
    element.x = Number(Math.abs(element.x));
    element.y = Number(Math.abs(element.y));
    element.z = Number(Math.abs(element.z));

    return {
      area: area.call(element),
      volume: vol.call(element),
    }
  });
  return result;
}

solve(area, vol,
  `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
)

solve(area, vol,
  `[
  {"x":"10","y":"-22","z":"10"},
  {"x":"47","y":"7","z":"-5"},
  {"x":"55","y":"8","z":"0"},
  {"x":"100","y":"100","z":"100"},
  {"x":"55","y":"80","z":"250"}
  ]`
)
