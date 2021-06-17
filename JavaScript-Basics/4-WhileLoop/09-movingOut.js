function movingOut(input) {
  let l = Number(input[0]);
  let w = Number(input[1]);
  let h = Number(input[2]);
  let apartmentVolume = l * w * h;
  index = 3;
  let counter = input[index];
  index++;

  let boxSum = 0;

  while (counter != "Done") {
    let boxesPerDay = Number(counter);
    boxSum += boxesPerDay;
    if (boxSum > apartmentVolume) {
      console.log(`No more free space! You need ${boxSum - apartmentVolume} Cubic meters more.`);
      break;
    }

    counter = input[index];
    index++;
  }

  if (apartmentVolume >= boxSum) {
    console.log(`${apartmentVolume - boxSum} Cubic meters left.`);
  }

}
movingOut(["10",
"1",
"2",
"4",
"6",
"Done"])

