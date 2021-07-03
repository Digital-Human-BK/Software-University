function easterDecoration(input) {
  let customers = Number(input[0])
  let index = 1;

  let item =0;
  let bill =0
  let totalPaid = 0;

  for (let i = 0; i < customers; i++) {

    let command = input[index];

    while (command != "Finish") {
      let currentItem = input[index++];
       switch(currentItem) {
         case "basket": bill+=1.50; item++; break;
         case "wreath": bill+=3.80; item++; break;
         case "chocolate bunny": bill+=7; item++; break;
       }        
       command = input[index];
    }

    if (item % 2 ===0) {
      bill*=0.80;
    }

    totalPaid +=bill;
    console.log(`You purchased ${item} items for ${bill.toFixed(2)} leva.`);
    bill=0;
    item=0;

    index++;
    command = input[index]
  }
  console.log(`Average bill per client is: ${(totalPaid / customers).toFixed(2)} leva.`);

}
easterDecoration(["2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish"
])