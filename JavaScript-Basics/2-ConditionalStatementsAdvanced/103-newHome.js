function newHome(solve) {
  let flower = solve[0];
  let flowersCount = Number(solve[1]);
  let budget = Number(solve[2]);

  let price = 0;

  if (flower == 'Roses') {
    if ( flowersCount > 80) {
      price = (flowersCount * 5) * 0.90;
    } else {
      price = flowersCount * 5;
    }
  } else if (flower == 'Dahlias') {
    if (flowersCount > 90) {
      price = (flowersCount * 3.80) * 0.85;
    } else {
      price = flowersCount * 3.80;
    }
  } else if (flower == 'Tulips') {
    if (flowersCount > 80) {
      price = (flowersCount * 2.80) * 0.85;
    } else {
      price = flowersCount * 2.80;
    }
  } else if (flower == 'Narcissus') {
    if (flowersCount < 120) {
      price = (flowersCount * 3) * 1.15;
    } else {
      price = flowersCount * 3;
    }
  } else if (flower == 'Gladiolus') {
    if (flowersCount < 80) {
      price = (flowersCount * 2.50) * 1.20;
    } else {
      price = flowersCount * 2.50;
    }
  }

  if (price <= budget) {
    console.log(`Hey, you have a great garden with ${flowersCount} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
  } else if (price > budget) {
    console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
  }
}

newHome(["Dahlias",
"112",
"460"])