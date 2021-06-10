function figures(parameters) {
  let type = String(parameters[0]);
  let area = '';

  if (type === 'square') {
    let side = Number(parameters[1]);
    area = side * side;
  } else if (type === 'rectangle') {
    let sideA = Number(parameters[1]);
    let sideB = Number(parameters[2]);
    area = sideA * sideB;
  } else if (type === 'circle') {
    let radius = Number(parameters[1]);
    area = Math.PI*radius * radius;
  } else if (type === 'triangle') {
    let sideA = Number(parameters[1]);
    let height = Number(parameters[2]);
    area = sideA * height / 2;
  }

  console.log(area.toFixed(3));
}

figures(["circle",
"6"])

