function validityChecker(x1, y1, x2, y2) {

  return `${getDistance(x1, y1, 0, 0)}\n${getDistance(x2, y2, 0, 0)}\n${getDistance(x1, y1, x2, y2)}`;

  function getDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    let result = '';
    if (Number.isInteger(distance)) {
      result = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
    } else {
      result = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    }
    return result;
  }
}
console.log(validityChecker(3, 0, 0, 4));
console.log(validityChecker(2, 1, 1, 1));