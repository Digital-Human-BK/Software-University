function factorial(a, b) {
  function factorialA(a) {
    let factorial = 1;
    for (let i = 0; i < a; i++) {
      factorial *= a - i;
    }
    return factorial;
  }
  function factorialB(b) {
    let factorial = 1;
    for (let i = 0; i < b; i++) {
      factorial *= b - i;
    }
    return factorial;
  }
  return (factorialA(a) / factorialB(b)).toFixed(2);
}
console.log(factorial(5, 2));
console.log(factorial(6, 2));