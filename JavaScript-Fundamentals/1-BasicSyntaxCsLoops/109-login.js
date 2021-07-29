function login(input) {
  let userName = input[0];
  let password = "";

  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }

  let index = 1;
  let passCheck = input[index];
  let counterLock = 0;

  while (passCheck != password) {
    counterLock++;
    if (counterLock === 4) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    console.log("Incorrect password. Try again.");

    index++;
    passCheck = input[index];
  }
  if (passCheck === password) {
    console.log(`User ${userName} logged in.`);
  }

}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])