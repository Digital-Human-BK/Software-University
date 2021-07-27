function triangle(num) {
  for (let i = 1; i <= num; i++) {
    let textLine = "";
    for (let j = 1; j <= i; j++) {
      textLine+=i + " ";
    }
    console.log(textLine);
  }
}
triangle(5)