function minerTask(array) {
  let resources = {};

  for (let i = 0; i < array.length; i += 2) {
    let resource = array[i];
    let qty = Number(array[i + 1]);

    if (!resources.hasOwnProperty(resource)){
      resources[resource] = qty;
    } else {
      resources[resource] += qty;
    }
  }

  for (const key in resources) {
    console.log(`${key} -> ${resources[key]}`);
  }
}
minerTask([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'
]
)
minerTask([
  'gold',
  '155',
  'silver',
  '10',
  'copper',
  '17',
  'gold',
  '15'
]
)