function phoneBook(array){

  let book = {};

  array.forEach(element => {
        let [name, phone] = element.split(" ");
        book[name] = phone;
  });

  for (const key of Object.keys(book)) {
    console.log(`${key} -> ${book[key]}`);
  }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)