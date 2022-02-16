function sumTable() {
  const elements = [...document.querySelectorAll('table tr td:last-child')].slice(0, -1);
  const result = elements.reduce((acc, el) => acc + Number(el.textContent), 0);
  document.getElementById('sum').textContent = result;
}