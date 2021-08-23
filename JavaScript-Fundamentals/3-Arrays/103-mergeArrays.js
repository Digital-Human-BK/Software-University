function merge(firstArray, secondArray) {
  let newArray =[];
  
  for (let i =0;i<firstArray.length;i++) {
    let firstElement = firstArray[i]
    let secondElement = secondArray[i]
    if (i % 2 ===0) {
      firstElement = Number(firstArray[i])  
      secondElement = Number(secondArray[i]) 
      newArray.push(firstElement+secondElement)
    } else {
      newArray.push(firstElement + secondElement)
    }
  }
  console.log(newArray.join(" - "));
  
}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])