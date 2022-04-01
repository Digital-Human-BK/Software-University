/*class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}
*/
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, 'fullName', {
    enumerable: true,
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    set(value) {
      [this.firstName, this.lastName] = value.split(' ');
    }
  })
}

const myPerson = new Person('John', 'Doe');
console.log(myPerson.fullName);

myPerson.lastName = 'Wick';
console.log(myPerson.fullName);

myPerson.fullName = 'John O\'Reily';

console.log(myPerson.firstName);
console.log(myPerson.lastName);