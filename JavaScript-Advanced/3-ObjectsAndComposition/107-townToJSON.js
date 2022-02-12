function townsToJSON(input) {
  let result = [];
  let headings = input.shift();

  const [town, latitude, longitude] = formatInput(headings);

  for (const line of input) {
    let [name, lat, long] = formatInput(line);
    lat = Number(Number(lat).toFixed(2));
    long = Number(Number(long).toFixed(2));

    let obj ={};
    obj[town] = name;
    obj[latitude] = lat;
    obj[longitude] = long;

    result.push(obj); 
  }

  return JSON.stringify(result)

  function formatInput(string){
    return string
    .split('|')
    .map(x => x.trim())
    .filter(x => x.length > 0);
  }
  
}
townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'
])