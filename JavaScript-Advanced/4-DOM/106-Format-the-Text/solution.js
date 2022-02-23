function solve() {
  const textInput = document.getElementById('input').value;
  const sentenceArray = textInput
    .split('.')
    .filter(s => s.length > 0);

  let text = [];
  let result = [];
  
  for (let i = 0; i < sentenceArray.length; i++) {    
    
    if (i % 3 == 0 && i != 0) {
      result.push(`<p>${text.join(' ')}</p>`);
      text.length = 0;
    }
    text.push(`${sentenceArray[i].trim()}.`);
  }
  if (text.length > 0) {
    result.push(`<p>${text.join(' ')}</p>`)
  }
  document.getElementById('output').innerHTML = result.join('')
}