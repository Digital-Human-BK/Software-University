function partyTime(guestArray) {

  let guestList = {
    "VIP": [],
    "regular": [],
  };
  //adding each guest to guestList by type
  let index =0;

  for (let i = 0; i < guestArray.length; i++) {
    const guest = guestArray[i];

    if (guest === "PARTY") {
      index = i+1;
      break;
    }

    if (isNaN(guest[0])) {
      guestList.regular.push(guest);
    } else {
      guestList.VIP.push(guest);
    }
  }
  //creating checkIn array without modifying the inital one
  let checkInArray = guestArray.slice(index);
  //finding missing guests
  for (const guest of checkInArray) {
    if (guestList.VIP.includes(guest)) {
      guestList.VIP.splice(guestList.VIP.indexOf(guest),1);
    } else {
      guestList.regular.splice(guestList.regular.indexOf(guest),1);
    }
  }
  //Array.from and Object.values are doing the same thing
  let missingGuests = [...Array.from(guestList.VIP),...Object.values(guestList.regular)];

  console.log(missingGuests.length);
  console.log(missingGuests.join("\n"));
}
partyTime(['7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc'
]
)
partyTime(['m8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
])