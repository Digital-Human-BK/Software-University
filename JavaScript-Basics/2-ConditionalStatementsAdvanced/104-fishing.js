function fishingBoat(solve) {
  let budget = Number(solve[0]);
  let season = solve[1];
  let fishemanGroup = Number(solve[2]);

  let price = 0;

  if (season == 'Spring') {
    if (fishemanGroup <= 6) {
      price = 3000 * 0.9;
    } else if (fishemanGroup <= 11) {
      price = 3000 * 0.85;
    } else {
      price = 3000 * 0.75;
    }
  } else if ( season == 'Summer' || season == 'Autumn') {
    if (fishemanGroup <= 6) {
      price = 4200 * 0.9;
    } else if (fishemanGroup <= 11) {
      price = 4200 * 0.85;
    } else {
      price = 4200 * 0.75;
    }
  } else if ( season == 'Winter') {
    if (fishemanGroup <= 6) {
      price = 2600 * 0.9;
    } else if (fishemanGroup <= 11) {
      price = 2600 * 0.85;
    } else {
      price = 2600 * 0.75;
    }
  }

  if (season != 'Autumn' && (fishemanGroup % 2) === 0) {
    price = price * 0.95;
  }

  if (price <= budget) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
  }
}

fishingBoat(["2000",
"Winter",
"13"])