function specialNum(num) {
  for (let i = 1; i <= num; i++) {
    let current = i.toString();
    let sum = 0;
    for (let j = 0; j < current.length; j++) {
      let digit = Number(current[j]);
      sum += digit;
    }
    if (sum % 5 === 0 || sum % 7 === 0 || sum % 11 === 0) {
      console.log(`${current} -> True`);
    } else {
      console.log(`${current} -> False`);
    }
  }
  //Not finished !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
specialNum(65)