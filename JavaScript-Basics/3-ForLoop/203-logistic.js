function logistic(solve) {
  let cargoCount = Number(solve[0]);

  let van = 0;
  let truck = 0;
  let train = 0;
  let totalWeight = 0;

  for (let i = 1; i <= cargoCount; i++) {

    let currentWeight = Number(solve[i]);

    if (currentWeight <= 3) {
      van += currentWeight;
    } else if (currentWeight <= 11) {
      truck += currentWeight;
    } else if (currentWeight > 11) {
      train += currentWeight;
    }
    totalWeight += currentWeight;
  }
  console.log(((van * 200 + truck * 175 + train * 120) / totalWeight).toFixed(2));
  console.log(`${(van / totalWeight * 100).toFixed(2)}%`);
  console.log(`${(truck / totalWeight * 100).toFixed(2)}%`);
  console.log(`${(train / totalWeight * 100).toFixed(2)}%`);

}
logistic(['5', '2', '10', '20', '1', '7'])
