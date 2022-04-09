class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (this.priceForTheCamp[condition] == undefined) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    let isPresent = this.listOfParticipants.some(p => p.name === name);
    if (isPresent == true) {
      return `The ${name} is already registered at the camp.`;
    }

    if (this.priceForTheCamp[condition] > money) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const participant = this.listOfParticipants.find(p => p.name === name);
    if (participant === undefined) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    const player1 = this.listOfParticipants.find(p => p.name === participant1);
    const player2 = this.listOfParticipants.find(p => p.name === participant2);

    if (typeOfGame === 'WaterBalloonFights') {
      if (player1 === undefined || player2 === undefined) {
        throw new Error(`Invalid entered name/s.`)
      }
      if (player1.condition !== player2.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (player1.power > player2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game ${typeOfGame}.`
      } else if (player2.power > player1.power) {
        player2.wins += 1;
        return `The ${player2.name} is winner in the game ${typeOfGame}.`
      } else {
        return `There is no winner.`;
      }
    }

    if (typeOfGame === 'Battleship') {
      if (player1 === undefined) {
        throw new Error('Invalid entered name/s.');
      }
      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

    this.listOfParticipants
    .sort((a, b) => b.wins - a.wins)
    .forEach(p=> result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

    return result.join('\n');
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

// Output 4
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0




// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));

// Output 3
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.




// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// console.log(summerCamp.unregisterParticipant("Petar"));


// Output 2
// The Petar Petarson was successfully registered.
// Uncaught Error: The Petar is not registered in the camp.
// The Petar Petarson removed successfully.


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// Output 1
// The money is not enough to pay the stay at the camp.
// The Petar Petarson was successfully registered.
// The Petar Petarson is already registered at the camp.
// Uncaught Error: Unsuccessful registration at the camp.
