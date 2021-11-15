function race(array) {

  let racers = {}

  let participants = array.shift().split(", ");

  participants.forEach(name => {
    racers[name] = 0;
  });

  for (const text of array) {
    if (text == "end of race") {
      break;
    }

    let personPattern = /[A-Z]|[a-z]/g;
    let name = text.match(personPattern).join("");

    if (racers.hasOwnProperty(name)) {
      let digitsPattern = /\d+?/g;
      let distance = text.match(digitsPattern)
        .reduce((a, b) => Number(a) + Number(b));

      racers[name] += distance;
    }
  }

  let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

  console.log(`1st place: ${sorted[0]}`);
  console.log(`2nd place: ${sorted[1]}`);
  console.log(`3rd place: ${sorted[2]}`);
}
race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'
])