function volwesSum(input) {
let text = input[0];
let sum = 0;

for (index = 0; index < text.length; index++) {
  let letter = text[index];
  switch (letter) {
    case 'a': sum +=1; break;
    case 'e': sum +=2; break;
    case 'i': sum +=3; break;
    case 'o': sum +=4; break;
    case 'u': sum +=5; break;
  }
}
  console.log(sum);
}  
volwesSum(["beer"])