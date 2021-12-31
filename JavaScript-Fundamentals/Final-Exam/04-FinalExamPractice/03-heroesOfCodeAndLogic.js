function heroesOfCode(input) {
  //all available actions
  let actions = {
    CastSpell: (heroes, name, mpCost, spell) => {
      mpCost = Number(mpCost);
      let hero = heroes[name];
      if (mpCost <= hero.mp) {
        hero.mp -= mpCost;
        console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
      } else {
        console.log(`${name} does not have enough MP to cast ${spell}!`);
      }
    },

    TakeDamage: (heroes, name, damage, attacker) => {
      damage = Number(damage);
      let hero = heroes[name];
      if (damage < hero.hp) {
        hero.hp -= damage;
        console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
      } else {
        hero.hp -=damage;
        console.log(`${name} has been killed by ${attacker}!`);
      }
    },

    Recharge: (heroes, name, recharge) => {
      recharge = Number(recharge);
      let hero = heroes[name];
      if (hero.mp + recharge > 200) {
        recharge = 200 - hero.mp;
      }
      hero.mp += recharge;
      console.log(`${name} recharged for ${recharge} MP!`);
    },

    Heal: (heroes, name, heal) => {
      heal = Number(heal);
      let hero = heroes[name];
      if (hero.hp + heal > 100) {
        heal = 100 - hero.hp;
      }
      hero.hp += heal;
      console.log(`${name} healed for ${heal} HP!`);
    }
  }

  //read number of heroes
  let n = Number(input.shift());

  //parse heroes
  let heroes = {};

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input.shift().split(" ");

    heroes[name] = {
      hp: Number(hp),
      mp: Number(mp),
    }
  }

  //read commands
  while (input[0] != 'End') {
    let [command, ...args] = input.shift().split(" - ");
    let action = actions[command];
    action(heroes, ...args);
  }

  //sort heroes
  let sorted = Object
    .entries(heroes)
    .filter(h => h[1].hp > 0)
    .sort(compareHeroes);

  for (let [hero, { hp, mp }] of sorted) {
    console.log(hero);
    console.log(`  HP: ${hp}`);
    console.log(`  MP: ${mp}`);
  }

  function compareHeroes(a, b) {
    return b[1].hp - a[1].hp || a[0].localeCompare(b[0]);
  }

}
heroesOfCode(["2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
  ])
heroesOfCode(["4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
  ])