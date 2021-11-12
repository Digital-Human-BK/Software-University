function treasureFidner(input) {
  let key = input
    .shift()
    .split(' ')
    .map(Number);

  while (input[0] != 'find') {
    let message = input.shift().split('');
    decryptMesage(key, message);
    extractData(message);
  }

  function decryptMesage(keySeq, message){
    for ( let i = 0, k = 0; i < message.length; i++, k++){      
      if (k >= keySeq.length) {
        k = 0;
      }
      
      let key = keySeq[k];
      let code = message[i].charCodeAt() - key;
      message[i] = String.fromCharCode(code);      
    }
  }

  function extractData(message){
    let type = message.slice(message.indexOf('&') + 1, message.lastIndexOf('&'));
    let coordinates = message.slice(message.indexOf('<') + 1, message.lastIndexOf('>'));
    console.log(`Found ${type.join('')} at ${coordinates.join('')}`);
  }
}
treasureFidner(["1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find"]
)