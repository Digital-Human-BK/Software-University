function smallShop(parameters) {
  let productType = parameters[0];
  let city = parameters[1];
  let quantity = Number(parameters[2]);

  let price = 0;

  if (city == 'Sofia') {
    switch (productType) {
      case 'coffee':
        price = quantity * 0.5;
        break;
      case 'water':
        price = quantity * 0.8;
        break;
      case 'beer':
        price = quantity * 1.20;
        break;
      case 'sweets':
        price = quantity * 1.45;
        break;
      case 'peanuts':
        price = quantity * 1.60;
        break;
    }
  } else if (city == 'Plovdiv') {
    switch (productType) {
      case 'coffee':
        price = quantity * 0.4;
        break;
      case 'water':
        price = quantity * 0.7;
        break;
      case 'beer':
        price = quantity * 1.15;
        break;
      case 'sweets':
        price = quantity * 1.30;
        break;
      case 'peanuts':
        price = quantity * 1.50;
        break;
    }
  } else {
    switch (productType) {
      case 'coffee':
        price = quantity * 0.45;
        break;
      case 'water':
        price = quantity * 0.7;
        break;
      case 'beer':
        price = quantity * 1.10;
        break;
      case 'sweets':
        price = quantity * 1.35;
        break;
      case 'peanuts':
        price = quantity * 1.55;
        break;
    }
  }

  console.log(price);
}  
smallShop(["peanuts",
    "Plovdiv",
    "1"])
    