function diagonalAttack(matrix) {
  let mapped = matrix.map(x => x.split(" ").map(Number));

  let topLeft = 0;
  for (let x = 0, y = 0; x < mapped.length; x++, y++) {
    topLeft += mapped[x][y];
  }

  let topRight = 0;
  for (let x = 0, y = mapped.length - 1; x < mapped.length; x++, y--) {
    topRight += mapped[x][y];
  }

  if (topLeft === topRight) {
    let filler = topRight;
    let middle = Number(Math.floor(mapped.length / 2));

    for (let x = 0, y = mapped.length - 1; x < middle; x++, y--) {
      if (x === 0) {
        mapped[x].fill(filler, x + 1, y);
      } else {
        mapped[x].fill(filler, 0, x);
        mapped[x].fill(filler, x + 1, y);
        mapped[x].fill(filler, y + 1);
      }
    }
    mapped[middle].fill(filler, 0, middle);
    mapped[middle].fill(filler, middle + 1);

    for (let x = mapped.length - 1, y = 0; x > middle; x--, y++){
      if (x === mapped.length -1) {
        mapped[x].fill(filler, y + 1, x);
      } else {
        mapped[x].fill(filler, 0, y);
        mapped[x].fill(filler, y + 1, x);
        mapped[x].fill(filler, x + 1);
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