function scholarship(input) {
  let currentIncome = Number(input[0]);
  let averageGrade = Number(input[1]);
  let minimumIncome = Number(input[2]);

  let socialScholarship = 0;
  let gradeScholarship = 0;

  if (currentIncome < minimumIncome) {
    if (averageGrade > 4.5) {
      socialScholarship = Math.floor(minimumIncome * 0.35);
    }
  }
  if (averageGrade >= 5.5) {
    gradeScholarship = Math.floor(averageGrade * 25);
  }

  if (socialScholarship > gradeScholarship) {
    console.log(`You get a Social scholarship ${socialScholarship} BGN`);
  } else if (gradeScholarship > socialScholarship) {
    console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
  } else {
    console.log(`You cannot get a scholarship!`);
  }
}

scholarship(["500.00",
"4.2",
"420.00"])
