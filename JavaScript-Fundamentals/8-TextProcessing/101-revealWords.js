function revealWords(words, template){

  let wordsArray = words.split(", ");

  for (const word of wordsArray) {
    
    let asterisksStr = "*".repeat(word.length);

    if (template.includes(asterisksStr)) {
     template= template.replace(asterisksStr, word);
    }


  }
  console.log(template);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)