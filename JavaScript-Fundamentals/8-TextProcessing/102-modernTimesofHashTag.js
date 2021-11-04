function hashTag(string) {
  let array = string.split(" ");

  for (let word of array) {


    if (word[0] == "#" && word.length > 1) {

      word = word.substring(1);
      let isValid = true;

      for (const char of word) {

        let code = char.charCodeAt();

        if (code < 65 || code > 90 && code < 97 || code > 122) {
          isValid = false;
          break;
        }
      }
      
      if (isValid) {
        console.log(word);
      }
    }
  }
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');