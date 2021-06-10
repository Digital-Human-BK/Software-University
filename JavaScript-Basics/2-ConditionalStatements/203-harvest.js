function harvest(parameters) {
  let vineyardArea = Number(parameters[0]);
  let grapePerSquareMeterKg = Number(parameters[1]);
  let wineTarget = Number(parameters[2]);
  let staffCount = Number(parameters[3]);

  let totalGrapeKg = vineyardArea * grapePerSquareMeterKg;
  let wine = totalGrapeKg * 0.4 / 2.5;
  
  if ( wine < wineTarget) {
    console.log(`It will be a tough winter! More ${Math.floor(wineTarget - wine)} liters wine needed.`);
  } else {
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(`${Math.ceil(wine - wineTarget)} liters left -> ${Math.ceil((wine - wineTarget) / staffCount)} liters per person.`);
  }
}



harvest(['1020', '1.5', '425', '4'])