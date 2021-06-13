function pow2(input) {
  let n = Number(input[0]);

  for ( let num = 0; num <= n; num+=2) {
    console.log(Math.pow(2,num));
  } 
}
pow2(["8"])