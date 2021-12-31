function passwordReset(input) {
  //actions object
  let actions = {
    TakeOdd,
    Cut,
    Substitute,
  }

  //parse password
  let pass = input.shift();

  //iterate and execute actions
  let line;
  while ((line = input.shift()) != "Done") {
    let [action, ...rest] = line.split(" ");
    pass = actions[action](pass, ...rest);
  }
  //print result
  console.log(`Your password is: ${pass}`);

  function TakeOdd(pass) {
    let newPass = "";
    for (let i = 1; i < pass.length; i += 2) {
      newPass += pass[i];
    }
    pass = newPass;
    console.log(pass);

    return pass;
  }

  function Cut(pass, index, length) {
    index = Number(index);
    length = Number(length);

    let substr = pass.substring(index, index + length);
    pass = pass.replace(substr, "");
    console.log(pass);

    return pass;
  }

  function Substitute(pass, substr, substitute) {
    if (pass.includes(substr)) {
      let pattern = new RegExp(substr, 'g')
      pass = pass.replace(pattern, substitute);
      console.log(pass);
    } else {
      console.log("Nothing to replace!");
    }
    return pass;
  }
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"])
console.log("====================");
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"])
