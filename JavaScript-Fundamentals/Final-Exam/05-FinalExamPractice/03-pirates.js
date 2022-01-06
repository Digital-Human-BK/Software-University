function pirates(input) {

  let events = {
    Plunder,
    Prosper,
  }

  //parse cities
  let cities = {};
  let line = input.shift();

  while (line != "Sail") {
    let [town, population, gold] = line.split("||");

    if (cities.hasOwnProperty(town)) {
      cities[town].population += Number(population);
      cities[town].gold += Number(gold);
    } else {
      cities[town] = {};
      cities[town].population = Number(population);
      cities[town].gold = Number(gold);
    }

    line = input.shift();
  }

  //execute events
  line = input.shift();

  while (line != "End") {
    let [action, ...rest] = line.split("=>");
    events[action](...rest)

    line = input.shift();
  }
  // sort cities
  let sorted = Object.keys(cities).sort((a, b) => {
    return cities[b].gold - cities[a].gold || a.localeCompare(b);
  });

  //print result
  if (sorted.length === 0) {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  } else {
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    sorted.forEach(town => {
      console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
    })
  }

  //functions
  function Plunder(town, people, gold) {

    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
    cities[town].population -= Number(people);
    cities[town].gold -= Number(gold);

    if (cities[town].population <= 0 || cities[town].gold <= 0) {
      delete cities[town];
      console.log(`${town} has been wiped off the map!`);
    }
  }

  function Prosper(town, goldAmt) {
    goldAmt = Number(goldAmt);

    if (goldAmt < 0) {
      console.log(`Gold added cannot be a negative number!`);
    } else {
      cities[town].gold += goldAmt;
      console.log(`${goldAmt} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
    }
  }
}
pirates(["Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End"])
console.log("=================");
pirates(["Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"])
