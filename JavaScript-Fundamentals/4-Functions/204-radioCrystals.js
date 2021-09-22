function radioCrystals(array) {
  let target = Number(array.shift());

  for (let chunk of array) {
    console.log(`Processing chunk ${chunk} microns`);

    let cut = 0;
    while (chunk / 4 >= target) {
      chunk /= 4;
      cut++;
    }
    if (cut > 0) {
      console.log(`Cut x${cut}`);
      chunk = Math.trunc(chunk);
      console.log("Transporting and washing");
    }

    let lap = 0;
    while (chunk * 0.8 >= target) {
      chunk *= 0.8;
      lap++;
    }
    if (lap > 0) {
      console.log(`Lap x${lap}`);
      chunk = Math.trunc(chunk);
      console.log("Transporting and washing");
    }

    let grind = 0;
    while (chunk - 20 >= target) {
      chunk -= 20;
      grind++;
    }
    if (grind > 0) {
      console.log(`Grind x${grind}`);
      chunk = Math.trunc(chunk);
      console.log("Transporting and washing");
    }

    let etch = 0;
    while (chunk - 2 >= target || chunk - 2 == target - 1) {
      chunk -= 2;
      etch++;
    }
    if (etch > 0) {
      console.log(`Etch x${etch}`);
      chunk = Math.trunc(chunk);
      console.log("Transporting and washing");
    }

    if (chunk + 1 === target) {
      chunk+=1;
      console.log("X-ray x1");
    }
    console.log(`Finished crystal ${chunk} microns`);
  }
}
radioCrystals([1375, 50000])
radioCrystals([1000, 4000, 8100])