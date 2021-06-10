function poolPipes(parameters) {
  let poolVolume = Number(parameters[0]);
  let flowPipeA = Number(parameters[1]);
  let flowPipeB = Number(parameters[2]);
  let hours = Number(parameters[3]);

  let fillRateA = hours * flowPipeA;
  let fillRateB = hours * flowPipeB;
  let totalFillRate = fillRateA + fillRateB;
  let fillRatePercent = ((totalFillRate * 100) / poolVolume).toFixed(2);
  let fillRatePercentPipeA = ((fillRateA * 100) / totalFillRate).toFixed(2);
  let fillRatePercentPipeB = ((fillRateB * 100) / totalFillRate).toFixed(2);
  let overspill = totalFillRate - poolVolume;

  if (totalFillRate <= poolVolume) {
    console.log(`The pool is ${fillRatePercent}% full. Pipe 1: ${fillRatePercentPipeA}%. Pipe 2: ${fillRatePercentPipeB}%.`);
  } else if (totalFillRate > poolVolume) {
    console.log(`For ${hours} hours the pool overflows with ${overspill.toFixed(2)} liters.`);
  }
}
poolPipes(['100', '100', '100', '2.5'])