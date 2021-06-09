function passwordCheck(input) {
  let passwordInput = String(input[0]);
  password = "s3cr3t!P@ssw0rd"

  if (passwordInput === password) {
    console.log('Welcome');
  } else {
    console.log('Wrong password!');
  }
}


passwordCheck(["s3cr3t!P@ssw0rd"])