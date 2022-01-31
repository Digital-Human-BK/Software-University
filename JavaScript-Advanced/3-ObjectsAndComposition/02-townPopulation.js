function townPopulation(list){
  let townsList = {};

  for (const townInfo of list) {
    let [name, population] = townInfo.split(' <-> ');
    population = Number(population);

    if (townsList[name] !== undefined) {
      population += townsList[name]
    }

    townsList[name] = population;
  }

  for (const town in townsList) {
    console.log(`${town} : ${townsList[town]}`);
  }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)