function count(string, searchedWord) {
  let words = string.split(" ");
  let counter =0;
  for (const word of words) {
    if (word === searchedWord) {
      counter++;
    }
  }
  console.log(counter);
}
count("This is a word and it also is a sentence",
"is"
);