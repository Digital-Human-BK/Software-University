function needForSpeed(input) {
  //create cars garage
  let garage = {};

  //all available action for each car
  let actions = {
    Drive: drive,
    Refuel: refuel,
    Revert: revert,
  }

  //put each car in garage
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = input.shift().split("|")
    garage[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }
  //execute each action
  let line;
  while ((line = input.shift()) != 'Stop') {
    let [action, ...rest] = line.split(' : ');
    actions[action](...rest);
  }

  //sort cars
  let sortedCars = Object.keys(garage).sort(sortCars);
  
  //print result
  sortedCars.forEach(car => {
    console.log(`${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`);
  })


  //functions
  function drive(car, distance, fuelCost) {
    distance = Number(distance);
    fuelCost = Number(fuelCost);

    if (garage[car].fuel >= fuelCost) {
      garage[car].fuel -= fuelCost;
      garage[car].mileage += distance;
      console.log(`${car} driven for ${distance} kilometers. ${fuelCost} liters of fuel consumed.`);
      if (garage[car].mileage >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete garage[car];
      }
    } else {
      console.log("Not enough fuel to make that ride");
    }
  }

  function refuel(car, fuel) {
    fuel = Number(fuel);

    if (garage[car].fuel + fuel > 75) {
      fuel = 75 - garage[car].fuel;
      garage[car].fuel = 75;
    } else {
      garage[car].fuel += fuel;
    }
    console.log(`${car} refueled with ${fuel} liters`);
  }

  function revert(car, kilometers) {
    kilometers = Number(kilometers);

    if (garage[car].mileage - kilometers < 10000) {
      garage[car].mileage = 10000;
    } else {
      garage[car].mileage -= kilometers;
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
    }
  }

  function sortCars(a, b) {
    return garage[b].mileage - garage[a].mileage || a.localeCompare(b);
  }
}
needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
])
console.log("==============================================");
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
])