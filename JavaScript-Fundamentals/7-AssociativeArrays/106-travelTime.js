function travelTime(array) {

  let travelList = {}

  for (const line of array) {
    let [country, town, cost] = line.split(" > ");
    cost = Number(cost);

    if (!travelList.hasOwnProperty(country)) {
      travelList[country] = {};
    }
    if (!travelList[country].hasOwnProperty(town)) {
      travelList[country][town] = cost;
    }
    if (travelList[country][town] > cost) {
      travelList[country][town] = cost;
    }
  }

  let sortedList = Object.keys(travelList).sort();

  for (const country of sortedList) {
    let sortCost = Object.entries(travelList[country])
      .sort((a, b) => a[1] - b[1])
      .join(" ")
      .split(",")
      .join(" -> ");

    console.log(`${country} -> ${sortCost}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
]
)