function hotelRoom(solve) {
  let month = solve[0];
  let nights = Number(solve[1]);

  let studio = 0;
  let apartment = 0;

  //Studio
  if (month == 'May' || month == 'October') {
    if (nights > 7 && nights <= 14) {
      studio = (50 * nights) * 0.95;
    } else if (nights > 14) {
      studio = (50 * nights) * 0.7;
    } else {
      studio = 50 * nights;
    }
  } else if (month == 'June' || month == 'September') {
    if (nights > 14) {
      studio = (75.2 * nights) * 0.8;
    } else {
      studio = 75.2 * nights;
    }
  } else if (month == 'July' || month == 'August') {
    studio = 76 * nights;
  }

  //Apartment
  if (month == 'May' || month == 'October') {
    if (nights > 14) {
      apartment = (65 * nights) * 0.9;
    } else {
      apartment = 65 * nights;
    }
  } else if (month == 'June' || month == 'September') {
    if (nights > 14) {
      apartment = (68.7 * nights) * 0.9;
    } else {
      apartment = 68.7 * nights;
    }
  } else if (month == 'July' || month == 'August') {
    if (nights > 14) {
      apartment = (77 * nights) * 0.9;
    } else {
      apartment = 77 * nights;
    }
  }

  console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
  console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])


