function coins(input) {
  let cents = Number(input[0]);
  cents = Math.trunc(cents * 100);
  let coins = 0;

    if (cents >= 200) {
      coins = Math.floor(cents / 200);
      cents = cents % 200;
    }
    if (cents >= 100) {
      coins++;
      cents = cents % 100;
    }
    if (cents >= 50) {
      coins++;
      cents = cents % 50;
    }
    if (cents >= 20) {
      coins = Math.floor(coins + (cents / 20));
      cents = cents % 20;
    }
    if (cents >= 10) {
      coins++;
      cents = cents % 10;
    }
    if (cents >= 5) {
      coins++;
      cents = cents % 5;
    }
    if (cents >= 2) {
      coins = Math.floor(coins + (cents / 2));
      cents = cents % 2;
    }
    if (cents === 1) {
      coins++;
    }
  console.log(coins);
}

coins(["1.41"])