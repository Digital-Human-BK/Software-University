function bonusPoints(input) {
  let points = Number(input[0]);
  let bonus = 0.0;
  
  if (points <= 100) {
    bonus = 5;
  } else if (points > 1000) {
    bonus = points * 0.1;
  } else {
    bonus = points * 0.2;
  }

  if (points % 2 == 0) {
    bonus += 1;
  } else if ( points % 10 == 5) {
    bonus += 2;
  } else {
    bonus = bonus;
  }
  
  console.log(bonus);
  console.log(points + bonus);
}

bonusPoints(["2703"])