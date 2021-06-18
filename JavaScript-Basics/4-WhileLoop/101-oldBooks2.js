function oldBooks2(input) {
  let myBook = input[0];
  let index = 1;
  let bookFound = false;
  let bookName = input[index];

  while (bookName !== "No More Books") {
    if (bookName === myBook) {
      bookFound = true;
      break;
    }
    index++;
    bookname = input[index];
  }

  if (bookFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${index-1} books.`);
  } else {
    console.log(`You checked ${index-1} books and found it.`);
  }

}
oldBooks2(["Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne"])
