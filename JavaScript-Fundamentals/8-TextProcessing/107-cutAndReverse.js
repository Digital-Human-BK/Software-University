function cutAndReverse(string){
  let half = string.length / 2;
  let firstHalf = string
  .substring(0, half)
  .split("")
  .reverse()
  .join("");

  let secondHalf = string
  .substring(half)
  .split("")
  .reverse()
  .join("");

  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')