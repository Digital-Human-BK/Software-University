function roomPainting(input) {
  let paint = Number(input[0])
  let wallpapers = Number(input[1])
  let gloves = Number(input[2])
  let brush = Number(input[3])

  let paintPrice = paint * 21.50;
  let wallpapersPrice = wallpapers * 5.20;
  let glovesCount = Math.ceil(wallpapers * 0.35);
  let brushCount = Math.floor(paint * 0.48);

  let glovesPrice = gloves * glovesCount;
  let brushPrice = brush * brushCount;

  let total = paintPrice+wallpapersPrice+glovesPrice+brushPrice;
  let delivery = total/15;

  console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);


}
roomPainting(["10", "8", "2.2", "5"])