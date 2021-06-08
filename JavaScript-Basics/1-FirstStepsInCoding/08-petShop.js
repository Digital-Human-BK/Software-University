function zooShop(input) {
  let dogsCount = Number(input[0]);
  let animalsCount = Number(input[1]);

  let dogsFood = dogsCount * 2.5;
  let animalsFood = animalsCount * 4;

  let totalPrice = dogsFood + animalsFood;

  console.log(`${totalPrice}lv.`);
}

zooShop(['5', '4'])