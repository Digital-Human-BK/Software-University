function convertor(parameters) {
  let valueToConvert = Number(parameters[0]);
  let inputType = String(parameters[1]);
  let outputType = String(parameters[2]);

  if (inputType === 'mm') {
    valueToConvert = valueToConvert / 1000;
  } else if (inputType === 'cm') {
    valueToConvert = valueToConvert / 100;
  } else {
    valueToConvert = valueToConvert;
  }

  if (outputType === 'mm') {
    valueToConvert = valueToConvert * 1000;
  } else if (outputType === 'cm') {
    valueToConvert = valueToConvert * 100;
  } else {
    valueToConvert = valueToConvert;
  }

  console.log(valueToConvert.toFixed(3));

}

convertor(["45","m","m"])