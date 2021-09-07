function diagonalAttack(matrix) {
  let mapped = matrix.map(
    x => x.split(" ").map(Number));

  let topLeft =0;
  for (let i = 0; i < mapped.length;i++){
    topLeft+= mapped[i][i];
  }

  let topRight =0;
  for (let i = 0; i < mapped.length; i++){
    topRight+=mapped[i][mapped.length-1-i];
  }

  if (topLeft === topRight) {
    for ( let a = 0; a < mapped.length;a++) {
      for (let b =0; b < mapped.length; b++) {
        if (a != b && a != mapped.length -1 -b){
          mapped[a][b] = topLeft;
        }
      }
    }
    mapped.forEach(x => console.log(x.join(" ")));
  } else {
    console.log(matrix.join("\n"));
  }
}
diagonalAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1']
)
diagonalAttack(['1 1 1',
  '1 1 1',
  '1 1 0']
)