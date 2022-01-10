function stringLength(...params){
  let sum = params.reduce((acc, str) => acc + str.length, 0);
  console.log(sum);
  console.log(Math.floor(sum / params.length));
}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')