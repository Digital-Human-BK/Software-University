function sleepingTom(input) {
  let daysOff = Number(input[0]);
  let daysAtWork = 365 - daysOff;

  let playTimeMinutes = (daysAtWork * 63) + (daysOff * 127);
  let difference = Math.abs(30000 - playTimeMinutes);
  let differenceHours = Math.floor(difference / 60);
  let differenceMinutes = difference % 60;

  if (playTimeMinutes > 30000) { 
    console.log('Tom will run away');
    console.log(`${differenceHours} hours and ${differenceMinutes} minutes more for play`);
  } else {
    console.log('Tom sleeps well');
    console.log(`${differenceHours} hours and ${differenceMinutes} minutes less for play`);
  }
}

sleepingTom(['113'])