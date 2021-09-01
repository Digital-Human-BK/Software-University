function nonDecreasing(array){
  let max = array[0];
  array = array.filter( x => {
    if (x >= max) {
      max = x;
    }
    return x >= max
  });
  console.log(array.join(" "));
}
//Aternative advanced =====================================================================

// function nonDecreasing2(arr) {
//   console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
// }
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasing([ 1, 2, 3, 4])
nonDecreasing([ 20, 3, 2, 15, 6, 1])