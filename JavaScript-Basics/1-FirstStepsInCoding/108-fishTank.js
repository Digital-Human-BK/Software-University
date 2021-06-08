function aquarium(input) {

  let lenghtCm = Number(input[0]);
  let widthCm = Number(input[1]);
  let heightCm = Number(input[2]);
  let percent = Number(input[3]);

  let aquariumVolumeMl = lenghtCm * widthCm * heightCm;
  let aquariumVolumeL = aquariumVolumeMl * 0.001;
  let takenVolume = percent * 0.01;

  let waterVolume = aquariumVolumeL - (aquariumVolumeL * takenVolume);

  console.log(waterVolume);

}


aquarium(['85', '75', '47', '17'])