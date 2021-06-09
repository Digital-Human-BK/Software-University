function house(size) {
  let x = Number(size[0]);
  let y = Number(size[1]);
  let h = Number(size[2]);

  // Walls 
  let sideWall = x * y;
  let window = 1.5 * 1.5;
  let sideWallArea = 2 * sideWall - 2*window;

  let backWall = x * x;
  let door = 1.2 * 2;
  let fronBackWallsArea = 2 * backWall - door;
  let totalWallsArea = sideWallArea + fronBackWallsArea;

  let paintForWalls = totalWallsArea / 3.4;

  // Roof
  let roofSides = 2 * (x * y);
  let roofFrontBack = 2 * (x * h / 2);
  let totalRoofArea = roofSides + roofFrontBack;

  let paintForRoof = totalRoofArea / 4.3;

  console.log(paintForWalls.toFixed(2));
  console.log(paintForRoof.toFixed(2));
}


house(['6', '10', '5.2'])