function passwordValidator(pass) {
  let password = pass;
  let isValidLength = false;
  let isValidChar = false;
  let isValidNum = false;
  let result = "";

  if (password.length >= 6 && password.length <= 10) {
    isValidLength = true;
  } else {
    result+= `Password must be between 6 and 10 characters` + `\n`
  }

  for (const char of password) {
    let code = char.charCodeAt();
    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      isValidChar = true;
    } else {
      isValidChar = false;
      result += `Password must consist only of letters and digits` + `\n`
      break;
    }
  }
   
  let count = 0;
  for (const char of password) {
    let digit = char.charCodeAt();
    if (digit >=48 && digit <=57){
      count++;
    }
    if (count >=2) {
      isValidNum = true;
      break;
    }
  }
  if (isValidNum != true) {
    result += `Password must have at least 2 digits`
  } 

  if (isValidLength && isValidChar && isValidNum) {
    return `Password is valid`;
  } else {
    return result;
  }

}
console.log(passwordValidator("login"));
console.log(passwordValidator("Pa$s$s"));
console.log(passwordValidator("MyPass123"));