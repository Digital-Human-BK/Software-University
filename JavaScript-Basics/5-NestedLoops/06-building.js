function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);
  let floorString = "";

  for (let f = floors; f >= 1; f--) {
    for (let r = 0; r < rooms; r++) {
      if (f === floors) {
        floorString += `L${f}${r} `;
      } else if (f % 2 === 0) {
        floorString += `O${f}${r} `;
      } else {
        floorString += `A${f}${r} `;
      }
    }
    console.log(floorString);
    floorString = "";
  }
}
building(["9", "5"])