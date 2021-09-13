function charRange(a, b) {
  let charCode = (c) => c.charCodeAt();
  let line = "";
  for (let i = Math.min(charCode(a), charCode(b)) + 1;i< Math.max(charCode(a), charCode(b)); i++) {
    line +=String.fromCharCode(i) + " ";
  }
  return line;
   
}
console.log(charRange("#", ":"));