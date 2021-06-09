function evenOdd(input) {
  let number = Number(input[0])
    if(number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
evenOdd(['2'])