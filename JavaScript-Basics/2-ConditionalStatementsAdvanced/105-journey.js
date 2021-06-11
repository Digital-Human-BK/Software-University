function journey(solve) {
  let budget = Number(solve[0]);
  let season = solve[1];

  let price = 0;
  let destination = '';
  let journeyType = '';

  if (budget <= 100) {
    if (season == 'summer') {
      price = budget * 0.3;
      destination = 'Bulgaria';
      journeyType = 'Camp'
    } else if (season == 'winter') {
      price = budget * 0.7;
      destination = 'Bulgaria';
      journeyType = 'Hotel';
    }
  } else if (budget <= 1000) {
    if (season == 'summer') {
      price = budget * 0.4;
      destination = 'Balkans';
      journeyType = 'Camp'
    } else if (season == 'winter') {
      price = budget * 0.8;
      destination = 'Balkans';
      journeyType = 'Hotel';
    }
  } else {
    price = budget * 0.9;
    destination = 'Europe';
    journeyType = 'Hotel';
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${journeyType} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"])