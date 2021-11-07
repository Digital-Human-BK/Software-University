function pascalCase(string){
  let result = []; 
  let mark=0;
  
  for (let i =1; i < string.length; i++) {
    let char = string[i];

    if (char === char.toUpperCase()) {
      let word = string.substring(mark, i);
      result.push(word);
      mark = i;
    }
  }
  result.push(string.substring(mark, string.length));
  
  console.log(result.join(", "));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor');