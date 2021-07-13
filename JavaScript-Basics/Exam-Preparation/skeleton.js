function skeleton(input) {
  let controlMin = Number(input[0]);
  let controlSec = Number(input[1]);
  let trackLength = Number(input[2]);
  let secondsPer100 = Number(input[3]);

  let timeToBeat = (controlMin * 60) + controlSec;
  let trackResistance = trackLength / 120;
  let delay = trackResistance * 2.5;
  let lapTime = (trackLength / 100) * secondsPer100 - delay;

  if (lapTime <= timeToBeat) {
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${lapTime.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${(lapTime - timeToBeat).toFixed(3)} second slower.`);
  }

}
skeleton(["1",
  "20",
  "1546",
  "12"
  ])