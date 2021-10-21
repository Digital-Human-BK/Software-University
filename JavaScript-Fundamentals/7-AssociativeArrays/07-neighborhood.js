function neighborhood(array) {
  let hood = new Map();
  const neighborhoods = array.shift().split(", ");

  for (const street of neighborhoods) {
    hood.set(street, []);
  }

  for (let item of array) {
    let [street, person] = item.split(" - ");
    if (hood.has(street)) {
      hood.get(street).push(person);
    }
  }

  let sorted = Array.from(hood).sort((a, b) => b[1].length - a[1].length)

  for (const key of sorted) {    
    console.log(`${key[0]}: ${key[1].length}`);
    
    key[1].forEach(person => { console.log(`--${person}`);
    });
  }
}
neighborhood(['Abbey Street, Herald Street, Bright Mews',
  'Bright Mews - Garry',
  'Bright Mews - Andrea',
  'Invalid Street - Tommy',
  'Abbey Street - Billy']
)