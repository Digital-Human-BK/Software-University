function searchForNumber(array, operations) {
  let take = operations[0];
  let del = operations[1];
  let number = operations[2];
  
  let newArray= array.slice(0,take);
  newArray.splice(0,del);

  let count =0;
  newArray.forEach(element => {
    if (element === number){
      count++;
    }
  });

  return `Number ${number} occurs ${count} times.`
}

console.log(searchForNumber([5, 2, 3, 4, 1, 6],  [5, 2, 3]));