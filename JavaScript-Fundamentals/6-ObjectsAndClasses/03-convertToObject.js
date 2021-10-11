function jsonToObject(jsonText){
  let object = JSON.parse(jsonText);
  for (const key of Object.keys(object)) {
    console.log(`${key}: ${object[key]}`);
  }
}
jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}')