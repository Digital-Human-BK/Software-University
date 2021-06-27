function train(input) {
  let jury = Number(input[0])
  let index = 1;
  let command = input[index];

  let gradeSum = 0;
  let gradesCount = 0;
  let totalGradesSum = 0;

  while (command != "Finish") {
    let currentExam = input[index++];

    for (let i = index; i < (index + jury); i++) {
      let grade = Number(input[i]);
      gradeSum += grade;
      gradesCount++;
    }
    console.log(`${currentExam} - ${(gradeSum / jury).toFixed(2)}.`);
    totalGradesSum += gradeSum;
    gradeSum = 0;

    index += jury;
    command = input[index];
  }
  console.log(`Student's final assessment is ${(totalGradesSum / gradesCount).toFixed(2)}.`);

}
train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


