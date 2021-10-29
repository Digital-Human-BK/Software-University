function armies(input) {

  let armies = {};

  for (const line of input) {
    if (line.includes('arrives')) {
      arrives(line);
    } else if (line.includes(': ')) {
      addArmy(line);
    } else if (line.includes(' + ')) {
      addArmyCount(line);
    } else if (line.includes('defeated')) {
      removeLeader(line);
    }
  }

  let sortedLeaders = Object.keys(armies).sort(sortArmies);

  sortedLeaders.forEach(leader => {
    console.log(`${leader}: ${armies[leader].totalPower}`);

    let sortedArmies = Object.keys(armies[leader]).slice(1);
    sortedArmies.sort((a, b) => {
      return armies[leader][b] - armies[leader][a];
    });

    sortedArmies.forEach(army => {
      console.log(`>>> ${army} - ${armies[leader][army]}`);
    })

  })

  //functions
  function arrives(string) {
    let leader = string.split(' arrives')[0];
    armies[leader] = {
      totalPower: 0
    };
  }

  function addArmy(string) {
    let [leader, rest] = string.split(': ');
    let [armyName, armyCount] = rest.split(', ');
    if (armies[leader]) {
      armies[leader][armyName] = Number(armyCount);
      armies[leader].totalPower += Number(armyCount);
    }
  }

  function addArmyCount(string) {
    let [armyName, armyCount] = string.split(' + ')
    for (const name in armies) {
      if (armies[name][armyName]) {
        armies[name][armyName] += Number(armyCount);
        armies[name].totalPower += Number(armyCount);
      }
    }
  }

  function removeLeader(string) {
    let leader = string.split(' defeated')[0]
    if (armies[leader]) {
      delete armies[leader];
    }
  }

  function sortArmies(a, b) {
    return armies[b].totalPower - armies[a].totalPower;
  }
}
armies(['Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205'])