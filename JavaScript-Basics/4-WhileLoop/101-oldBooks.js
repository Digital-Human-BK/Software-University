function oldBooks(input) {
  let index = 0;
  let myBook = input[index];
  index++;
  let book = input[index];

  let booksCount = 0;

  while (book !== "No More Books") {
    if (book == myBook) {
      console.log(`You checked ${booksCount} books and found it.`);
      break;
    }

    booksCount++;
    index++;
    book = input[index];
  }
  if (book == "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${booksCount} books.`);
  }

}
oldBooks(["Bourne",
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

