function maxSequence(array) {
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    let currentSequence = [array[i]];
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        currentSequence.push(array[j])
      } else {
        break;
      }
      if ( result.length < currentSequence.length) {
        result = currentSequence;
      }
    }
  }
  console.log(result.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])