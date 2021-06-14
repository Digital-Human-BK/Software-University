function salary(input) {
  let tabsNumber = Number(input[0]);
  let salaryTotal = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    let currentTab = (input[i]);

    switch (currentTab) {
      case 'Facebook': salaryTotal -= 150; break;
      case 'Instagram': salaryTotal -= 100; break;
      case 'Reddit': salaryTotal -= 50; break;
    }
  }

  if (salaryTotal <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salaryTotal.toFixed(0));
  }
}


salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])



