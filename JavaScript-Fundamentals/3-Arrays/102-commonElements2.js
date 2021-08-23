function commonElements(firstArray, secondArray) {
  for (const el of firstArray) {
    let isCommon = secondArray.includes(el)
    if ( isCommon ) {
      console.log(el);
    }    
  }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)