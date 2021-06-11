function commission(input) {
  let city = input[0];
  let sales = Number(input[1]);

  if (0 <= sales && sales <= 500) {
    switch (city) {
      case 'Sofia': console.log((sales * 0.05).toFixed(2)); break;
      case 'Varna': console.log((sales * 0.045).toFixed(2)); break;
      case 'Plovdiv': console.log((sales * 0.055).toFixed(2)); break;
      default: console.log('error'); break;
    }
  } else if (500 < sales && sales <= 1000) {
    switch (city) {
      case 'Sofia': console.log((sales * 0.07).toFixed(2)); break;
      case 'Varna': console.log((sales * 0.075).toFixed(2)); break;
      case 'Plovdiv': console.log((sales * 0.08).toFixed(2)); break;
      default: console.log('error'); break; 

    }
  } else if ( 1000 < sales && sales <= 10000) {
    switch (city) {
      case 'Sofia': console.log((sales * 0.08).toFixed(2)); break;
      case 'Varna': console.log((sales * 0.10).toFixed(2)); break;
      case 'Plovdiv': console.log((sales * 0.12).toFixed(2)); break;
      default: console.log('error'); break;
    }
  } else if ( sales > 10000) {
    switch (city) {
      case 'Sofia': console.log((sales * 0.12).toFixed(2)); break;
      case 'Varna': console.log((sales * 0.13).toFixed(2)); break;
      case 'Plovdiv': console.log((sales * 0.145).toFixed(2)); break;
      default: console.log('error'); break;
    }
  } else {
    console.log('error');
  }
}

commission(["Kaspichan",
"-50"])