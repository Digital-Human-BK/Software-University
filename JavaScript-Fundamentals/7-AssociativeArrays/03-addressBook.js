function addressBook(array) {

  let book = {};

  array.forEach(element => {
    let [name, address] = element.split(":");
    book[name] = address;
  });

  let sortedArr = Object.entries(book);

  sortedArr.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, address] of sortedArr) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd']
)