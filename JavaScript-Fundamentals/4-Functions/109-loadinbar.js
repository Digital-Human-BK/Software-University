function loadingBar(n){
  let load = n / 10;
  let str =["["];
  for (let i = 0; i < 10;i++) {
    if (i < load) {
      str.push("%");
    } else {
      str.push(".")
    }
  }
  str.push("]");

  if (load == 10) {
    return `100% Complete!` + "\n" + str.join("");
  } else {
    return `${n}% ` + str.join("") + "\n" + `Still loading...`
  }
}
console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));