function cake(input) {
  let l = Number(input[0]);
  let w = Number(input[1]);
  let cakeSize = l * w;
  let index = 2;
  let command = input[index];

  let totalPieces = 0;

  while(command != "STOP") {
    let pieces = Number(input[index]);
    totalPieces +=pieces;

    if (totalPieces > cakeSize) {
      console.log(`No more cake left! You need ${totalPieces - cakeSize} pieces more.`);
      break;
    }
    index++;
    command = input[index];
  }
  if ( totalPieces <= cakeSize) {
    console.log(`${cakeSize - totalPieces} pieces are left.`);
  }

}


cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])