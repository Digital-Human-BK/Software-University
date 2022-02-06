function heroicInventory(input){
  let register = [];
  for (const line of input) {
    let [name, level, rest] = line.split(' / ');
    level = Number(level);
    let items = rest ? rest.split(', ') : [];

    register.push({name, level, items})
  }  
  return JSON.stringify(register);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])