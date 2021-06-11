function skiHoliday(solve) {
  let stay = Number(solve[0]) - 1;
  let roomType = solve[1];
  let feedback = solve[2];

  let price = 0;

  if (stay < 10) {
    switch (roomType) {
      case 'room for one person': price = 18 * stay; break;
      case 'apartment': price = (25 * stay) * 0.7; break;
      case 'president apartment': price = (35 * stay) * 0.9; break;
    }
  } else if (10 <= stay && stay < 15) {
    switch (roomType) {
      case 'room for one person': price = 18 * stay; break;
      case 'apartment': price = (25 * stay) * 0.65; break;
      case 'president apartment': price = (35 * stay) * 0.85; break;
    }
  } else {
    switch (roomType) {
      case 'room for one person': price = 18 * stay; break;
      case 'apartment': price = (25 * stay) * 0.5; break;
      case 'president apartment': price = (35 * stay) * 0.8; break;
    }
  }

  if ( feedback == 'positive') {
    price = price * 1.25;
  } else if ( feedback == 'negative') {
    price = price * 0.9;
  }
  console.log(price.toFixed(2));
}

skiHoliday(["2",
"apartment",
"positive"])


