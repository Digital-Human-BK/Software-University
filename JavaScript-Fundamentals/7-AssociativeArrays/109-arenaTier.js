function arenaTier(participants) {

  let gladiatorsList = {};
  let totalPower = {};

  for (const line of participants) {
    if (line === "Ave Cesar") {
      break;
    }

    if (line.includes("->")) {
      let [name, skill, skillPower] = line.split(" -> ");
      skillPower = Number(skillPower);

      addGladiatorToList(name, skill, skillPower);
    }

    if (line.includes("vs")) {
      let [fighterA, fighterB] = line.split(" vs ");

      if (gladiatorsList.hasOwnProperty(fighterA) && gladiatorsList.hasOwnProperty(fighterB)) {
        battle(fighterA, fighterB);
      }
    }
  }

  let sorted = Object.entries(totalPower).sort((a, b) => b[1] - a[1]);

  for (const [gladiator, powerNotInUse] of sorted) {
    console.log(`${gladiator}: ${totalPower[gladiator]} skill`);

    let sortSkill = Object.entries(gladiatorsList[gladiator])
      .sort((a, b) => {
        if (b[1] - a[1] === 0) {
         return a[0].localeCompare(b[0]);
        }
         return b[1] - a[1]
      });

    sortSkill.forEach(kvp => {
      console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
    })
  }


  function addGladiatorToList(name, skill, skillPower) {
    if (!gladiatorsList.hasOwnProperty(name)) {
      gladiatorsList[name] = {};
      totalPower[name] = 0;
    }
    if (!gladiatorsList[name].hasOwnProperty(skill)) {
      gladiatorsList[name][skill] = skillPower;
      totalPower[name] += skillPower;
    }
    if (gladiatorsList[name][skill] < skillPower) {
      totalPower[name] = totalPower[name] + (skillPower - gladiatorsList[name][skill]);
      gladiatorsList[name][skill] = skillPower;
    }
  }

  function battle(fighterA, fighterB) {

    let fighterASkills = Object.entries(gladiatorsList[fighterA]);
    let fighterBSkills = Object.entries(gladiatorsList[fighterB]);

    let fight = false;

    let totalPowerA = 0;
    let totalPowerB = 0;

    for (const [skillA, powerA] of fighterASkills) {

      totalPowerA += powerA;
      totalPowerB = 0;

      for (const [skillB, powerB] of fighterBSkills) {

        totalPowerB += powerB;

        if (skillA === skillB) {
          fight = true;
        }
      }
    }

    if (fight) {
      if (totalPowerA > totalPowerB) {
        delete gladiatorsList[fighterB];
        delete totalPower[fighterB];
      } else {
        delete gladiatorsList[fighterA];
        delete totalPower[fighterA];
      }
    }
  }


}
arenaTier([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar'
]
);

arenaTier([
  'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
]
);