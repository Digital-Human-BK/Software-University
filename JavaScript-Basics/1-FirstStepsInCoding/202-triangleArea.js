function triangle(arg1, arg2) {
  
  let a = Number(arg1);
  let h = Number(arg2);

  let area = a * h / 2;
  console.log(area.toFixed(2));

}

triangle('20', '30')