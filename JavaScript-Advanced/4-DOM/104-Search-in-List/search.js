function search() {
  let townsList = document.querySelectorAll('#towns li');
  let input = document.getElementById('searchText').value;
  let result = document.getElementById('result');

  let count = 0;

  for (let li of townsList) {
    if (li.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
      li.style.fontWeight = 'bold';
      li.style.textDecoration = 'underline';
      count++;
    } else {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
    }
  }

  result.textContent = `${count} matches found`
}