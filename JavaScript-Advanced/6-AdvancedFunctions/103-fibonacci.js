function getFibonator() {
  let prev = 1;
  let cur = 0;

  function inner() {
    let next = prev + cur;
    prev = cur;
    cur = next;
    return cur;
  }

  return inner;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); //13

//alternative
/*
function getFibonator() {
  let prev = 0;
  let cur = 1;

  function inner() {
    let next = prev + cur;
    prev = cur;
    cur = next;
    return prev;
  }

  return inner;
}
*/
