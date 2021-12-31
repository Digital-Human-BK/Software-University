function fancyBarcodes(input) {
  let count = Number(input[0]);
  let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/

  for (let i = 1; i <= count; i++) {
    let barcode = input[i];
    if (pattern.test(barcode)) {
      let group = barcode.match(/[0-9]/g)
      group == null ? group = "00" : group = group.join("");

      console.log(`Product group: ${group}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"])

fancyBarcodes(["6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"])
