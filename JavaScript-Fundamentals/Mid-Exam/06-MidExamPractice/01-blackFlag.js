function blackFlag(array) {
  let days = Number(array[0]);
  let plunder = Number(array[1]);
  let target = Number(array[2]);

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {

    totalPlunder += plunder;

    if (i % 3 == 0) {
      totalPlunder += (plunder * 0.5);
    } 
    if (i % 5 == 0) {
      totalPlunder = totalPlunder * 0.7;
    } 
  }
  let percentage = (totalPlunder / target) * 100;
  
  if (totalPlunder >= target) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"])
blackFlag(["10", "20", "380"])
