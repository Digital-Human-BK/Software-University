function oddOccurrences (string) {
  //use map to keep adding order
  let obj = new Map();

  //convert string to array
  let array = string.toLowerCase().split(" ");

  //find each occurrence
  array.forEach(element => {
    if (!obj.has(element)) {
      obj.set(element, 0);
    }
    obj.set(element, obj.get(element)+1);
  });
  //filter odd occurrences
  let filterKeys = Array.from(obj.keys())
  .filter(key => obj.get(key) % 2 != 0)
  .join(" ");

  console.log(filterKeys);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')