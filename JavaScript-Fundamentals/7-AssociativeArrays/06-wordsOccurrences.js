function wordsOccurrences(array){
  let words = new Map();

  for (const item of array) {
    let name = item;
    let count =1;
    if (words.has(name)) {
      words.set(name, words.get(name)+1)
    } else {
      words.set(name, count);
    }
  }
  
  let sorted = [...words].sort((a,b) => b[1]- a[1]);

  for (const key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`);
  }
}
wordsOccurrences(["Here", "is", "the", "first",
 "sentence", "Here", "is", "another",
  "sentence", "And", "finally", "the",
   "third", "sentence"])