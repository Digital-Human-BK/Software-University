function book(input) {
  let pagesCount = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let bookReadTime = pagesCount / pagesPerHour;
  let hoursPerDay = bookReadTime / days;

  console.log(hoursPerDay);
}

book(['432', '15', '4'])