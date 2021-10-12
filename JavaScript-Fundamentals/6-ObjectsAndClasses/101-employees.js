function employees(array) {
  array.forEach(element => {
    let obj = {
      name: element,
      personalNumber: element.length
    }
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
  });
}
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
]
)