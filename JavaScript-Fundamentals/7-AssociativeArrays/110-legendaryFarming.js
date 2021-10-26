function legendaryFarming(string) {

  let keyMats = {
    "shards": 0,
    "fragments": 0,
    "motes": 0,
  };

  let junk = {};

  let drop = string.split(" ");

  for (let i = 0; i < drop.length; i += 2) {
    let qty = Number(drop[i]);
    let name = drop[i + 1].toLowerCase();

    if (name === "shards" || name === "fragments" || name === "motes") {
      keyMats[name] += qty;
      if (keyMats[name] >= 250) {
        keyMats[name] -= 250;
        console.log(`${craftItem(name)} obtained!`);
        break;
      }

    } else {
      if (!junk.hasOwnProperty(name)) {
        junk[name] = 0;
      }

      junk[name] += qty
    }
  }

  let keyMatsSorted = Object.entries(keyMats).sort((a, b) => {
    //Sort by two criteria
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];

  });

  keyMatsSorted.forEach(mat => console.log(`${mat[0]}: ${mat[1]}`));

  Object.entries(junk)
  .sort()
  .forEach(mat => console.log(`${mat[0]}: ${mat[1]}`));


  function craftItem(material) {
    switch (material) {
      case "shards": return "Shadowmourne";
      case "fragments": return "Valanyr";
      case "motes": return "Dragonwrath";
    }
  }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log(`============`);
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')