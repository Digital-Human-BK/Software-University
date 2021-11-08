function hardWords([string, array]){
  let startIndex = 0;
  let endIndex = 0;

  let wordTemplate = ""

  while (string.includes("_")) {
    startIndex = string.indexOf("_");

    for (let i = startIndex; i < string.length; i++) {
      let char = string[i];
      
      if (char !== "_") {
        endIndex = i;
        break;
      }
      wordTemplate+=char;
    }

    for (const word of array) {
      if (wordTemplate.length === word.length) {
        string = string.replace(wordTemplate, word);
        break;
      }
    }
    wordTemplate ="";
  }

  console.log(string);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)