function matrix(n) {
  let string ="";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string+= `${n} `;
    }
    string+= "\n";
  }
  return string;
}
console.log(matrix(2));
