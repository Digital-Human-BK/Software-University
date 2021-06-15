function grades(input) {
  let studentsCount = Number(input[0]);

  let topStudents = 0;
  let goodStudents = 0;
  let lowStudents = 0;
  let badStudents = 0;
  let averageScore = 0;

  for (let i = 1; i <= studentsCount; i++) {
    let currentGrade = Number(input[i]);

    if (currentGrade < 3) {
      badStudents++;
    } else if (currentGrade <= 3.99) {
      lowStudents++;
    } else if (currentGrade <= 4.99) {
      goodStudents++;
    } else {
      topStudents++;
    }
    averageScore += currentGrade;
  }

  console.log(`Top students: ${(topStudents / studentsCount * 100).toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${(goodStudents / studentsCount * 100).toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${(lowStudents / studentsCount * 100).toFixed(2)}%`);
  console.log(`Fail: ${(badStudents/studentsCount*100).toFixed(2)}%`);
  console.log(`Average: ${(averageScore/studentsCount).toFixed(2)}`);

}
grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5'])