function solve(parameters) {
  let type = (parameters[0]);
  let a = Number(parameters[1]);
  let b = Number(parameters[2]);

  if (type === 'square') {
    let area = a * a;
    console.log(area.toFixed(3));
  } else if (type === 'rectangle') {
    let area = a * b;
    console.log(area.toFixed(3));
  } else if (type === 'circle') {
    let area = Math.PI * a * a;
    console.log(area.toFixed(3));
  } else if (type === 'triangle') {
    let area = a * b /2;
    console.log(area.toFixed(3));
  }

}
solve(["circle", "6"])
