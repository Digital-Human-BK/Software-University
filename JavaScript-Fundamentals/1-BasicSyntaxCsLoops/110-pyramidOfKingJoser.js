function pyramid(base, increment) {
  currentBaseArea = 0;
  marble = 0;
  stone = 0;
  lazuli = 0;
  gold = 0;
  floorCount = 0;

  while (base > 0) {
    floorCount++;
    if (base < 3) {
      gold = base * base;
      break;
    }

    if (floorCount % 5 == 0) {
      currentBaseArea = base * base;
      lazuli += (base * 4) - 4;
      stone += currentBaseArea - (base * 4 - 4);
    } else {
      currentBaseArea = base * base;
      marble += (base * 4) - 4;
      stone += currentBaseArea - (base * 4 - 4)
    }

    base -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(floorCount * increment)}`);
}
pyramid(23, 0.5)