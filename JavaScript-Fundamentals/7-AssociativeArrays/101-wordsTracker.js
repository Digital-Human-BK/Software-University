function wordsTracker(array) {

  let wordsObj = {};

  let wordsList = array.shift().split(" ");

  for (const wordToFind of wordsList) {

    wordsObj[wordToFind] = 0;

    for (const word of array) {
      if (wordToFind === word) {
        wordsObj[wordToFind]++;
      }
    }
  }

  let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}
wordsTracker([
  'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
  , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)