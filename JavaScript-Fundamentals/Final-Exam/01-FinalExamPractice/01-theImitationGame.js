function theImitationGame(input) {

  let message = input.shift()

  let actions = {
    Move: move,
    Insert: insert,
    ChangeAll: changeAll,
  }

  while (input[0] != 'Decode') {
    let [command, ...rest] = input.shift().split('|');
    actions[command](...rest);
  }

  console.log(`The decrypted message is: ${message}`);

  function move(n) {
    n = Number(n);
    let first = message.substring(0, n);
    let last = message.substring(n);
    message = last + first;
  }

  function insert(index, value) {
    index = Number(index);
    if (index >= 0 && index <= message.length) {
      let first = message.substring(0, index);
      let last = message.substring(index);
      message = first + value + last;
    }
  }

  function changeAll(oldStr, newStr) {
    message = message.split(oldStr).join(newStr);
  }

}
theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode'])
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'])