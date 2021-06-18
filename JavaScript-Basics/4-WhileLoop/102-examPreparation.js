function exam(input) {
  let badGradesLimit = Number(input[0]);
  let index = 1;
  let counter = input[index];

  let badGrades = 0;
  let examCount = 0;
  let gradesSum = 0;
  let lastExam = '';

  while (counter !== "Enough") {

    let currentExam = input[index++];
    lastExam = currentExam;
    let currentGrade = Number(input[index]);

    if (currentGrade <= 4) {
      badGrades++;
    }

    if (badGrades >= badGradesLimit) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      break;
    }
    gradesSum += currentGrade;
    examCount++;

    index++;
    counter = input[index];
  }
  
  if (counter === "Enough") {
    console.log(`Average score: ${(gradesSum / examCount).toFixed(2)}`);
    console.log(`Number of problems: ${examCount}`);
    console.log(`Last problem: ${lastExam}`);
  }

}
exam(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
