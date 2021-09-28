function firstLastK(array) {
  let k = array[0]
  let newArr = array.slice(1);
  let firstK = newArr.slice(0, k);
  let lastK = newArr.slice(- k);
  return firstK.join(" ") + "\n" + lastK.join(" ")
}
console.log(firstLastK([2, 7, 8, 9]));