function magicMatrices(array) {

  let isMagic = true;

  let rowSum = array[0].reduce((a, b) => a + b);

  let columnSum = 0;
  array.forEach(row => columnSum += row[0]);

  for (let i = 0; i < array.length; i++) {
    let row = 0;
    let column = 0;

    row += array[i].reduce((a, b) => a + b);

    for (let j = 0; j < array.length; j++) {
      column += array[j][i];
    }
    if (rowSum !== row || columnSum !== column) {
      isMagic = false;
      break;
    }
    
  }
  isMagic ? console.log(isMagic) : console.log(isMagic);
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)