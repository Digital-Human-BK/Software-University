function roadRardar(speed, area) {
  let areaLimit = {
    residential: 20,
    city: 50,
    interstate: 90,
    motorway: 130,
  }

  if (speed <= areaLimit[area]) {
    console.log(`Driving ${speed} km/h in a ${areaLimit[area]} zone`);
  } else {
    let status;
    let difference = speed - areaLimit[area];

    if (difference <= 20) {
      status = 'speeding';
    } else if (difference <= 40) {
      status = 'excessive speeding';
    } else {
      status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaLimit[area]} - ${status}`);
  }
}
roadRardar(40, 'city')
roadRardar(21, 'residential')
roadRardar(120, 'interstate')
roadRardar(200, 'motorway')