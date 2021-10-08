function person(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }
  return person;
}
console.log(person("Peter", "Pan", "20"));