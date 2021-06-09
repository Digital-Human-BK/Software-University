function time(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]) + 15;

  if (minutes >= 60) {
    hour = hour + 1;
    minutes = minutes - 60;
  }

  if (hour >= 24) {
    hour = hour - 24;
  }

  if (minutes > 9) {
    console.log(`${hour}:${minutes}`);
  } else {
    console.log(`${hour}:0${minutes}`);
  }
}

time(["23", "59"])