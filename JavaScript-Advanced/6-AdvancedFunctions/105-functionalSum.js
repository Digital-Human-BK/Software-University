function add(num){
  let sum = 0;

  function inner(n){
    sum+=n;
    return inner;
  }

  inner.toString = function() {
    return sum;
  }

  return inner(num)
}

let a = add(1);
console.log(''+a);
let b = a(6);
console.log(b);
let c = b(-3)
console.log(c.toString());