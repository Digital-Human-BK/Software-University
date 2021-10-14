function inventory(array) {
  let heroes = [];
  for (const line of array) {
    let [name, lvl, items] = line.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");

    let hero = {
      name,
      lvl,
      items,
    }
    heroes.push(hero);
  }
  heroes
    .sort((a, b) => a.lvl - b.lvl)
    .forEach(h => {
      console.log(`Hero: ${h.name}`);
      console.log(`level => ${h.lvl}`);
      console.log(`items => ${h.items}`);
    })
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
])