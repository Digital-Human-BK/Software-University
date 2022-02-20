function extract(id) {
  const text = document.getElementById(id).textContent;
  const ptn = /\((.+?)\)/g;

  let match = ptn.exec(text);
  const result = []
  while (match != null) {
    result.push(match[1]);
    match = ptn.exec(text);
  }
    return result.join('; ');
}