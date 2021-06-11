function cinema(sovle) {
  let type = sovle[0];
  let rows = Number(sovle[1]);
  let columns = Number(sovle[2]);

  let income = 0;
  
  if ( type == 'Premiere') {
    income = (rows* columns) * 12;
  } else if ( type == 'Normal') {
    income = (rows * columns) * 7.50;
  } else {
    income = (rows * columns) * 5;
  }

  console.log(income.toFixed(2));
}


cinema(["Discount",
"12",
"30"])


