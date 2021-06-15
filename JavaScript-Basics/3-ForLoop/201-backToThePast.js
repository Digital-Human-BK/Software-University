function backToThePast(solve) {
  let inheritanceStart = Number(solve[0]);
  let yearTo = Number(solve[1]);

  let age = 18;
  let inheritanceEnd = inheritanceStart;

  for (let i = 1800; i <= yearTo; i++) {
    if (i % 2 === 0) {
      inheritanceEnd -= 12000;
    } else {
      inheritanceEnd = inheritanceEnd - (12000 + (50 * age));
    }
    age++;
  }

  if (inheritanceEnd >= 0) {
    console.log(`Yes! He will live a carefree life and will have ${inheritanceEnd.toFixed(2)} dollars left.`);
  } else {
    console.log(`He will need ${Math.abs(inheritanceEnd).toFixed(2)} dollars to survive.`);
  }

}
backToThePast(['100000.15', '1808'])