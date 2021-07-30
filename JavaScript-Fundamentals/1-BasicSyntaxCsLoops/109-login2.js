function login(arr) {
  let username = arr.shift();
  let pass = username.split("").reverse().join("");
  let wrongCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let passCheck = arr[i];
    if (passCheck == pass) {
      console.log("Logged in");
    } else {
      wrongCount++;
      if (wrongCount === 4) {
        console.log("Account blocked!!!");
        break;
      }
      console.log("Wrong Password. Please try again!");
    }
  }

}
login(['Acer', 'login', 'go', 'let me in', 'bla', 'recA'])