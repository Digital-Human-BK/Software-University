function transport(input) {
  let distanceKm = Number(input[0]);
  let tarrifType = String(input[1]);

  let tarrif = 0;

  if (distanceKm <= 20) {
    if (tarrifType === 'day') {
      tarrif = 0.70 + (distanceKm * 0.79);
    } else {
      tarrif = 0.70 + (distanceKm * 0.9);
    }
  }

  if (distanceKm > 20 ) {
    tarrif = distanceKm * 0.09;
  }
  
  if (distanceKm > 100) {
    tarrif = distanceKm * 0.06;
  }

  console.log(tarrif.toFixed(2));
}


transport(['25', 'day'])