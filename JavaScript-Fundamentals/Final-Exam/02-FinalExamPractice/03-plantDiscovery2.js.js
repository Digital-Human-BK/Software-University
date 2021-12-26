function plantDiscovery(input) {
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  }

  let plants = {};

  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split('<->');
    plants[name] = {
      rate: [],
      rarity: Number(rarity),
    }
  }

  while (input[0] != "Exhibition") {
    let [command, rest] = input.shift().split(': ');
    let [name, num] = rest.split(' - ');

    if (plants[name]) {
      actions[command](name, num);
    } else {
      console.log('error');
    }
  }
  Object.keys(plants).forEach(avgRate);

  let sorted = Object.keys(plants).sort(sortedPlants);

  console.log('Plants for the exhibition:');
  sorted.forEach(plant => {
    console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${(plants[plant].rate).toFixed(2)}`)
  })

  //functions
  function rate(name, rating) {
    rating = Number(rating);
    plants[name].rate.push(rating)
  }

  function update(name, newRarity) {
    newRarity = Number(newRarity);
    plants[name].rarity = newRarity;
  }

  function reset(name) {
    plants[name].rate.length = 0;
  }

  function sortedPlants(a, b) {
    return plants[b].rarity - plants[a].rarity || plants[b].rate - plants[a].rate;
  }

  function avgRate(x) {
    let divisor = plants[x].rate.length;
    plants[x].rate = plants[x].rate.reduce((a, b) => { return a + b }, 0);
    if (plants[x].rate != 0) {
      plants[x].rate = plants[x].rate / divisor;
    }
  }
}