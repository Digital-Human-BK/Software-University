function firm(input) {
  let hoursNeed = Number(input[0]);
  let days = Number(input[1]);
  let overtimeWorkers = Number(input[2]);
  let daysToWork = days * 0.9;

  let overtimeHours = overtimeWorkers* (2 * days);
  let normalHours = 8 * daysToWork;

  let totalHours = Math.floor(overtimeHours + normalHours);

  if ( totalHours >= hoursNeed) {
    console.log(`Yes!${totalHours-hoursNeed} hours left.`);
  } else {
    console.log(`Not enough time!${hoursNeed-totalHours} hours needed.`);
  }
}
firm([168, 13, 5])