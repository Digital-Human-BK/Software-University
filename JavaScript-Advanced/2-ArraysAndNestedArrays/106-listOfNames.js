function listOfNames(list){
  list
  .sort((a,b) => a.localeCompare(b))
  .forEach((a, i) => {
    console.log(`${i+1}.${a}`);
  });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);