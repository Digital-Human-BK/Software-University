function sequence2k1(input) {
  let numK = Number(input[0]);

  let test = 1;
  while (test <= numK) {
    console.log(test);
    test = test * 2 + 1;
  }

}


sequence2k1(['31'])