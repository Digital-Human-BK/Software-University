function starEnigma(array) {
  let msg = array.shift();

  let attacked = [];
  let destroyed = [];

  for (const message of array) {
    let enigma = /[star]/gi;
    let key = message.match(enigma) && message.match(enigma).length;

    let decrypted = "";

    for (let i = 0; i < message.length; i++) {
      let symbol = String.fromCharCode(message.charCodeAt(i) - key);
      decrypted += symbol;
    }

    let pattern =/@(?<planet>[A-Za-z]+)([^\@\-\!\:\>]+)?:(?<population>\d+)([^\@\-\!\:\>]+)\!?(?<type>[AD])\!([^\@\-\!\:\>]+)?->(?<soldiers>\d+)/gm

    let match = pattern.exec(decrypted);

    if (match) {
      let planet = match.groups.planet;
      let planetType = match.groups.type;

      if (planetType === "A") {
        attacked.push(planet);
      } else {
        destroyed.push(planet);
      }
    }  
  }

  console.log(`Attacked planets: ${attacked.length}`);
  attacked
    .sort((a, b) => a.localeCompare(b))
    .forEach(planet => {
      console.log(`-> ${planet}`);
    });

  console.log(`Destroyed planets: ${destroyed.length}`);
  destroyed
    .sort((a, b) => a.localeCompare(b))
    .forEach(planet => {
      console.log(`-> ${planet}`);
    });
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR'
])