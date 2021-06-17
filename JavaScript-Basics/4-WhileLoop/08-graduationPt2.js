function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let grade = input[index];
  index++;
  

  let year = 1;
  let badGrade = 0;
  let tempGrade = 0;
  let averageGrade = 0;
  while (year <= 12) {
    let currentGrade = Number(grade);
    if (currentGrade >= 4) {      
      tempGrade += currentGrade
      averageGrade = tempGrade / year;
    } else {
      badGrade++;
    }
    if (badGrade > 1) {
      console.log(`${name} has been excluded at ${year-1} grade`);
      break;
    }
    if (year == 12) {
      console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    year++;
    grade = input[index];
    index++;
  }
}



graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
