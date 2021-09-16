function passwordValidator(pass) {

  function checkLength(password) {
    return password.length >= 6 && password.length <= 10 ? true : `Password must be between 6 and 10 characters`;
  }

  function checkValidChar(password) {
    let isValidChar = false;

    for (const char of password) {
      let code = char.charCodeAt();
      if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        isValidChar = true;
      } else {
        isValidChar = false;
        break;
      }
    }
    return isValidChar ? true : `Password must consist only of letters and digits`;
  }

  function checkValidNum(password) {
    let count = 0;
    let isValidNum = false;

    for (const char of password) {
      let digit = char.charCodeAt();
      if (digit >= 48 && digit <= 57) {
        count++;
      }
      if (count >= 2) {
        isValidNum = true;        
      }
    }
    return isValidNum ? true : `Password must have at least 2 digits`;
  }
  
  if (checkLength(pass) === true && checkValidChar(pass) ===true && checkValidNum(pass) === true) {
    return `Password is valid`;
  } 
  let result = [];
  if (checkLength(pass) != true) {
    result.push(checkLength(pass));
  }
  if (checkValidChar(pass)!= true) {
    result.push(checkValidChar(pass));
  }
  if (checkValidNum(pass)!=true) {
    result.push(checkValidNum(pass));
  }
  return result.join("\n");
}
console.log(passwordValidator("login"));
console.log(passwordValidator("Pa$s$s"));
console.log(passwordValidator("MyPass123"));