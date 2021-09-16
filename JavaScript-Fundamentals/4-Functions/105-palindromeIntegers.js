function palindrome(array) {
  let result = "";
  for (let num of array) {
    let isPalindrome = "true";
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      let digit = Number(num[i]);
      let lastIndex = Number(num.length - 1);
      let mirrorDigit = Number(num[lastIndex-i])
      if (digit != mirrorDigit){
        isPalindrome = "false"
        break;
      }
    }
    result+=isPalindrome + "\n";
  }
  return result;
}
console.log(palindrome([123, 323, 421, 121]));

console.log(palindrome([32, 2, 232, 1010]));