function netherRealms(input) {
  let demons = {};

  let pattern = /\s*,\s*/
  let realm = input.split(pattern);

  for (const demon of realm) {
    let hp = calculateHp(demon);
    let dmg = calculateDmg(demon);
    dmg = alterDmg(demon, dmg);

    demons[demon] = {
      hp,
      dmg,
    };
  }

  let sortedDemons = Object.keys(demons).sort((a, b) => a.localeCompare(b));

  sortedDemons.forEach(demon => {
    console.log(`${demon} - ${demons[demon].hp} health, ${(demons[demon].dmg).toFixed(2)} damage`);
  })

  //functions
  function calculateHp(demon) {

    let hpPattern = /[^0-9\+\-\*\/\.]/gm
    let matchHp = demon.match(hpPattern);

    let hp = 0;
    if (matchHp != null) {
      hp = matchHp
        .map(x => x.charCodeAt())
        .reduce((a, b) => a + b);
    }
    return hp;
  }

  function calculateDmg(demon) {

    let dmgPattern = /[+-]?\d+(\.\d+)?/gm
    let matchDmg = demon.match(dmgPattern);

    let dmg = 0;
    if (matchDmg != null) {
      dmg = matchDmg.map(Number).reduce((a, b) => a + b);
    }
    return dmg;
  }

  function alterDmg(demon, dmg) {
    let quantifiersPtn = /[*/]/gm
    let quantifiers = demon.match(quantifiersPtn);

    if (quantifiers != null) {
      quantifiers.forEach(q => {
        if (q == '*') {
          dmg *= 2;
        } else {
          dmg /= 2;
        }
      });
    }
    return dmg;
  }
}
netherRealms('Gos/ho')
netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('M3ph1st0**, Azazel')