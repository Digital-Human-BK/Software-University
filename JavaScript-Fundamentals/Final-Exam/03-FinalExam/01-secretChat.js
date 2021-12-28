function secretChat(input) {

  let operations = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };

  let message = input.shift();

  let line = input.shift();

  while (line != 'Reveal') {
    let [action, ...rest] = line.split(":|:");
    message = operations[action](message, ...rest);

    line = input.shift();
  }

  console.log(`You have a new text message: ${message}`);

  function InsertSpace(message, index) {
    index = Number(index);
    message = message.substring(0, index) + ' ' + message.substring(index);
    console.log(message);

    return message;
  }
  function Reverse(message, substring) {
    if (message.includes(substring)) {
      let reversed = substring
        .split('')
        .reverse()
        .join('')

      message = message.replace(substring, '')+ reversed;
      console.log(message);

    } else {
      console.log("error");
    }
    return message;
  }
  function ChangeAll(message, substring, replacement) {
    let pattern = new RegExp(substring, 'g');
    message = message.replace(pattern, replacement)
    // message = message.split(substring).join(replacement);
    console.log(message);

    return message;
  }
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
])
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
])