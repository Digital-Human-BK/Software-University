function football(input) {
  let country = input[0];
  let gifts = input[1];
  let giftsCount = Number(input[2]);

  let price = 0;
  let isInvalidGift = false;
  let isInvalidCountry = false;


  switch (country) {
    case "Argentina":
      switch (gifts) {
        case "flags": price = giftsCount * 3.25; break;
        case "caps": price = giftsCount * 7.20; break;
        case "posters": price = giftsCount * 5.10; break;
        case "stickers": price = giftsCount * 1.25; break;
        default: isInvalidGift = true; break;
      }
      break;
    case "Brazil":
      switch (gifts) {
        case "flags": price = giftsCount * 4.20; break;
        case "caps": price = giftsCount * 8.50; break;
        case "posters": price = giftsCount * 5.35; break;
        case "stickers": price = giftsCount * 1.20; break;
        default: isInvalidGift = true; break;
      }
      break;
    case "Croatia":
      switch (gifts) {
        case "flags": price = giftsCount * 2.75; break;
        case "caps": price = giftsCount * 6.90; break;
        case "posters": price = giftsCount * 4.95; break;
        case "stickers": price = giftsCount * 1.10; break;
        default: isInvalidGift = true; break;
      }
      break;
    case "Denmark":
      switch (gifts) {
        case "flags": price = giftsCount * 3.10; break;
        case "caps": price = giftsCount * 6.50; break;
        case "posters": price = giftsCount * 4.80; break;
        case "stickers": price = giftsCount * 0.90; break;
        default: isInvalidGift = true; break;
      }
      break;
    default: isInvalidCountry = true; break;  
  }
  if (isInvalidCountry){
    console.log("Invalid country!");
  } else if (isInvalidGift){
    console.log("Invalid stock!");
  } else {
    console.log(`Pepi bought ${giftsCount} ${gifts} of ${country} for ${price.toFixed(2)} lv.`);
  }
}
football(["Denmark",
"capaas",
"8"])

