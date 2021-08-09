function latin(toLetter) {
  for (let i = 0; i < toLetter; i++) {
    let letter = String.fromCharCode(97 + i);
    for (let j = 0; j < toLetter; j++) {
      let letterTwo = String.fromCharCode(97 + j);
      for (let k = 0; k < toLetter; k++) {
        let letterThree = String.fromCharCode(97 + k);
        console.log(`${letter}${letterTwo}${letterThree}`);
      }
    }
  }
}
latin(3)