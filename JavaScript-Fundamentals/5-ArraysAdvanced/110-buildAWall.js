function buildWall(array) {

  let result = [];

  for (let i = 1; ; i++) {
    let crew = 0;

    array.forEach(h => {
      if (h + i <= 30) {
        crew++;
      }
    });
    
    if (crew == 0) {
      break;
    }

    result.push(crew * 195);
  }

  console.log(result.join(", "));
  console.log(`${result.reduce((a, b) => a + b, 0) * 1900} pesos`);

}
buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);