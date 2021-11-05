function substring(word, string) {
  let words = string.toLowerCase().split(" ");

  if(words.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }  
}
substring('javascript', 'JavaScript is the best programming language');
substring('python', 'JavaScript is the best programming language');