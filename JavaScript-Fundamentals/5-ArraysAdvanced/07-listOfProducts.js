function list(arr){
  let sorted = arr.sort()
  for (let i =0;i< arr.length;i++){
    console.log(`${i + 1}.${sorted[i]}`);
  }
}
list(["Potatoes", "Tomatoes", "Onions", "Apples"])