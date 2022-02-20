function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  if (convention == 'Camel Case') {
    document.getElementById('result').textContent = toCamelCase(text);
  } else if (convention == 'Pascal Case') {
    document.getElementById('result').textContent = toPascalCase(text);
  } else {
    document.getElementById('result').textContent = 'Error!'
  }


  // converting functions
  function toCamelCase(text) {
    let wordsArr = text.toLowerCase().split(' ');

    let result = wordsArr.map(word => {
      return word[0].toUpperCase() + word.substring(1);
    }).join('');

    return result = result[0].toLowerCase() + result.substring(1);
  }


  function toPascalCase(text) {
    let wordsArr = text.toLowerCase().split(' ');

    let result = wordsArr.map(word => {
      return word[0].toUpperCase() + word.substring(1);
    }).join('');

    return result;
  }
}