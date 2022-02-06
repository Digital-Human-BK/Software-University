function carFactory(customerRequirements) {
  const {
    model,
    power,
    carriage,
    color,
    wheelsize
  } = customerRequirements;

  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ].sort((a, b) => {
      return Math.abs(power - a.power) - Math.abs(power - b.power);
    });

    return engines[0];
  };

  function getCarriage(carriage, color) {
    return {
      type: carriage,
      color,
    }
  };

  function getWheels(size) {
    size % 2 == 0 ? size-= 1 : size;
    return [size, size, size, size];
  }
  //final product
  return {
    model,
    engine: getEngine(power),
    carriage: getCarriage(carriage, color),
    wheels: getWheels(wheelsize),
  }
}

console.log(carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));
console.log(carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
}));