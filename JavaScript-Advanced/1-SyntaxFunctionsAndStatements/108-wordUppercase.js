function wordUppercase(string){
  console.log(string.match(/\b\w+\b/gm).join(', ').toUpperCase());
}
wordUppercase('Hi, how are you?')
wordUppercase('hello')
wordUppercase('Write 1 program that extracts all words from a passed in string and converts them to upper case.')