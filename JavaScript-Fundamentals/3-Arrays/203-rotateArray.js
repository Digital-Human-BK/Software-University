function rotateArray(array){

  let rotations = Number(array.pop());

  for( let i =0; i < rotations; i++) {
    let element = array.pop();
    array.unshift(element);
  }
  console.log(array.join(" "));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])