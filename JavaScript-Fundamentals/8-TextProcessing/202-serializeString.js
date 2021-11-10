function serializeString([string]) {
  let container = {}

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (container[char] == undefined) {
      container[char] = [];
      container[char].push(i);
    } else {
      container[char].push(i);
    }
  }

  let characters = Object.keys(container);

  characters.forEach(char => {
    console.log(`${char}:${container[char].join('/')}`);
  })
}
serializeString(["abababa"])
serializeString(["avjavamsdmcalsdm"])