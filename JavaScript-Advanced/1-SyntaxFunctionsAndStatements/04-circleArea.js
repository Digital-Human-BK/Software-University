function circleArea(arg) {
  let type = typeof(arg);

  if (type === 'number') {
    let result = (arg ** 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
  }
}
circleArea(5)
circleArea('name')
circleArea(NaN)