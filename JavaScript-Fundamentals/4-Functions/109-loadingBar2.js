function loadingBar(n) {
  let arr = new Array(10).fill(".").map((x, i) => {
      if (i < n / 10) x = "%"
      return x
  })

  if (n !== 100) {
      console.log(`${n}% [${arr.join("")}] 
Still loading...`)
  } else {
      console.log(`${n}% Complete! 
[${arr.join("")}]`)
  }
}
console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));