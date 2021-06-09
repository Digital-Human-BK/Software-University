function swimmingRecord(parameters) {
  let worldRecord = Number(parameters[0]);
  let distance = Number(parameters[1]);
  let timePerMeter = Number(parameters[2]);

  let = waterResistance = Math.floor(distance / 15) * 12.5;
  let = newRecordAttempt = distance * timePerMeter + waterResistance;

  if (newRecordAttempt < worldRecord) {
    console.log(`Yes, he succeeded! The new world record is ${newRecordAttempt.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${Math.abs(worldRecord - newRecordAttempt).toFixed(2)} seconds slower.`);
  }
}

swimmingRecord(["55555.67", "3017", "5.03"])
