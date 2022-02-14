function rectangle(width, height, color) {
  let rect = {
    width,
    height,
    color: capitalize(color),
    calcArea
  }

  function calcArea() {
    return width * height;
  }

  function capitalize(color){
    return color[0].toUpperCase() + color.slice(1);
  }

  return rect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
