function censoredWords(string, word) {

  let count = word.length;

  while (string.includes(word)) {
    string = string.replace(word, "*".repeat(count));
  }
  console.log(string);
}
censoredWords("A small sentence with some words", "small")