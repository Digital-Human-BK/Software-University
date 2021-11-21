function winningTicket(string) {
  let collection = string.split(',');

  for (let ticket of collection) {
    ticket = ticket.trim();
    let first = ticket.substring(0,10);
    let second = ticket.substring(10);


    let pattern = /[@#$^]{6,10}/
    let firstMatch = first.match(pattern);
    let secondMatch = second.match(pattern);

    if (ticket.length !== 20) {

      console.log("invalid ticket");

    } else if (firstMatch !== null && secondMatch !== null) {

      let length = Math.min(firstMatch[0].length, secondMatch[0].length);

      if (length == 10) {
        console.log(`ticket "${ticket}" - ${length}${firstMatch[0][0]} Jackpot!`);
      } else {
        console.log(`ticket "${ticket}" - ${length}${firstMatch[0][0]}`);
      }

    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}
winningTicket('Cash$$$$$$Ca$$$$$$$$')
winningTicket('$$$$$$$$$$$$$$$$$$$$ , aabb  , th@@@@@@eemo@@@@@@ey')
winningTicket('validticketnomatch:(')