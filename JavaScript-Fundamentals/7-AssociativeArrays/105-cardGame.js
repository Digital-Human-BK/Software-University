function cardGame(hands) {

  let players = {};

  for (const draw of hands) {
    let [player, cards] = draw.split(": ");
    cards = cards.split(", ");

    if (!players.hasOwnProperty(player)) {
      players[player] = [];
    }

    players[player] = players[player].concat(cards);
  }

  for (let key in players) {
    players[key] = new Set(players[key]);

    let handValue = 0;

    players[key].forEach(card => {
      handValue += getCardValue(card);
    });

    console.log(`${key}: ${handValue}`);
  }

  function getCardValue(card) {
    let multiplier = card.split("").pop();
    let power = card.slice(0, card.length - 1);

    if (power >= 2 && power <= 10) {
      power = Number(power)
    } else if (power === "J") {
      power = 11;
    } else if (power === "Q") {
      power = 12;
    } else if (power === "K") {
      power = 13;
    } else if (power === "A") {
      power = 14;
    }

    switch (multiplier) {
      case "S": multiplier = 4; break;
      case "H": multiplier = 3; break;
      case "D": multiplier = 2; break;
      case "C": multiplier = 1; break;
    }

    return power * multiplier;
  }
}
cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'
]
)