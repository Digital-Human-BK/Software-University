function fishland(input) {
  let mackerelPrice = Number(input[0]);
  let cacaPrice = Number(input[1]);
  let palamudKg = Number(input[2]);
  let safridKg = Number(input[3]);
  let midiKg = Number(input[4]);

  let palamudPriceKg = mackerelPrice + (mackerelPrice * 0.6);
  let safridPriceKg = cacaPrice + (cacaPrice * 0.8);

  let palamudTotal = palamudPriceKg * palamudKg;
  let safridTotal = safridPriceKg * safridKg;
  let midiTotal = midiKg * 7.5;
  
  let billTotal = palamudTotal + safridTotal + midiTotal;

  console.log(billTotal.toFixed(2));
}


fishland(['6.90', '4.20', '1.5', '2.5', '1'])