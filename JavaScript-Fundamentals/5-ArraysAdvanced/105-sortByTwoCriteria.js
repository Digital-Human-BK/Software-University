function sortByTwoCriteria(array) {
  array.sort((a,b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(array.join("\n"));
}
sortByTwoCriteria(["alpha", "beta", "gamma"])
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
sortByTwoCriteria(["Deny", "omen", "test", "Default"])

//unfinished