function mapper(string) {
  let match = string.match(/(=|\/)[A-Z][A-Za-z]{2,}\1/gm);
  let travelPoints = 0;
  let result = [];
  if (match != null) {
    match.forEach(x => {
      result.push(x.slice(1, -1));
      travelPoints += x.slice(1, -1).length;
    });
  }
  console.log(`Destinations: ${result.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}
mapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
mapper("ThisIs some InvalidInput")