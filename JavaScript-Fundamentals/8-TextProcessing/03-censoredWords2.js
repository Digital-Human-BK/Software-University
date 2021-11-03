function censoredWords(string, word) {
  console.log(string.split(word).join("*".repeat(word.length)));
}
censoredWords("A small sentence with some words", "small")