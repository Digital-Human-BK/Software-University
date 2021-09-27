function printDNA(num) {
  let sequence = "ATCGTTAGGG";
  let symbolsArr = sequence.split("");
  let counter =1;
  for (let i = 0; i < num; i++) {
    let one = symbolsArr.shift();
    let two = symbolsArr.shift();

    if (counter == 1) {
      console.log(`**${one}${two}**`);
      counter++
    } else if (counter == 2) {
      console.log(`*${one}--${two}*`);
      counter++
    } else if (counter == 3) {
      console.log(`${one}----${two}`);
      counter++
    } else if (counter == 4) {
      console.log(`*${one}--${two}*`);
      counter = 1;
    }
    
    symbolsArr.push(one, two);
  }
}

printDNA(20)