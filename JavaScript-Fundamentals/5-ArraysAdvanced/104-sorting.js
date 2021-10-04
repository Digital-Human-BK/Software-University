function sort(array) {
  let result =[];
  let sorted = array.slice().sort((a,b)=> b-a);
  
  for (let i = 0; i < array.length-i;i++){
    let first = sorted.shift();
    let second = sorted.pop();
    result.push(first);
    result.push(second);
  }

  console.log(result.join(" "));

}
sort([1, 3, 52, 69, 63, 31, 2, 18, 94]);
