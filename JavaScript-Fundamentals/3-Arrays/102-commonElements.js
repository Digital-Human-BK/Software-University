function commonElements(arrayOne, arrayTwo) {
  for (const elementOne of arrayOne) {
    for (const elementTwo of arrayTwo) {
      if (elementOne === elementTwo) {
        console.log(elementOne);
      }      
    }    
  }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)