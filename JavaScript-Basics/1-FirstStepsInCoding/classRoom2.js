function classRoom(lengthМ, widthМ) {
  let lengthInMeters = Number(lengthМ);
  let widthInMeters = Number(widthМ);

  let lengthInCm = lengthInMeters * 100;
  let widthInCm = widthInMeters * 100;

  let usableWidth = widthInCm - 100;
  let desksByWidth = (usableWidth - (usableWidth % 70)) / 70;

  let desksByLength = (lengthInCm - (lengthInCm % 120)) / 120;

  let totalDesks = desksByLength * desksByWidth - 3;

  console.log(totalDesks);
}


classRoom('8.4', '5.2')