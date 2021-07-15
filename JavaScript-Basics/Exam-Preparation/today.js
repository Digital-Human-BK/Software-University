function amazing(num) {
  let numToStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numToStr.length; i++) {
    sum += Number(numToStr[i]);
  }

  let sumTostr = sum.toString();

  if (sumTostr.includes("9")) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}
amazing(1233)
amazing(999)