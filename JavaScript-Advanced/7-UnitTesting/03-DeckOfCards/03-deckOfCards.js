function printDeckOfCards(cards) {
  let result = [];

  for (let card of cards) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);
    try {
      result.push(createCard(face, suit));
    } catch (err) {
      console.log(`Invalid card: ${card}`);
      return;
    }
  }
  console.log(result.join(' '));

  function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suitToString = {
      'S': '\u2660',
      'H': '\u2665',
      'D': '\u2666',
      'C': '\u2663',
    }

    if (validFaces.includes(face) == false) {
      throw new Error('Error');
    } else if (Object.keys(suitToString).includes(suit) == false) {
      throw new Error('Error');
    }

    return {
      face,
      suit,
      toString() {
        return `${face}${suitToString[suit]}`
      }
    }
  }

}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
