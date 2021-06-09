function celsiusToFarenheit(arg1) {

  let celsius = Number(arg1);

  let farenheit = celsius * 1.8 + 32;
  console.log(farenheit.toFixed(2));
}


celsiusToFarenheit('25')