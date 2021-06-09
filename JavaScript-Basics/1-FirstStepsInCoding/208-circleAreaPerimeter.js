function circleRadius(radius) {
  let r = Number(radius[0]);
  let area = Math.PI * r * r;
  let perimeter = 2 * Math.PI * r;

  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}

circleRadius(['3'])