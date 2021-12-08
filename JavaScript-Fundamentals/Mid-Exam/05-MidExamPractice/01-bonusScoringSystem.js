function solve(arr) {
  let arrOfnums = arr.map(Number);

  let students = arrOfnums.shift();
  let lectures = arrOfnums.shift();
  let initialBonus = arrOfnums.shift();

  let maxAttendance = 0;
  let maxBonus = 0;

  for (let i = 0; i < students; i++) {

      let attendance = arrOfnums[i];
      let totalBonus = (attendance / lectures) * (5 + initialBonus);
      
      if (totalBonus >= maxBonus) {
          maxBonus = totalBonus;
          maxAttendance = attendance;
      }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
solve([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20'
]
)
solve([10,
  30,
  14,
  8,
  23,
  27,
  28,
  15,
  17,
  25,
  26,
  5,
  18])