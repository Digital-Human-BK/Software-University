"use strict";
let stringArr = ['one', 'two', 'three'];
let carArr = ['Honda', 'Accord', 2003];
let mixedData = ['Car', 2015, true];
// stringArr[0] = 22; //error
// stringArr.push(22); //error
// carArr[0] = true; //error
// carArr = mixedData //error
mixedData = carArr; //any data can be assigned to string | number union type
let test = []; //type any
let typeTest = []; //array of strings
typeTest.push('test');
//Tuple
let myTuple = ['Mike', 33, true];
let mixed = ['Mike', 34, true];
// myTuple = mixed; //error as it requires exactly 3 elements of the specified type at the specified position;
// myTuple[2] = 3 //error type is different than specified one
myTuple[1] = 35;
mixed = myTuple;
let myObj;
myObj = {};
const exampleObj = {
    prop1: 'Mike',
    prop2: 33
};
let person = {
    name: 'John',
    active: false,
    hobbies: [1, 'Gaming'],
};
let person2 = {
    name: 'Chester',
    //active is optional cuz of the question mark in the TestPerson
    hobbies: [1, 'string']
};
// person2.age = 22 //error property does not exist on TestPerson
const greetPerson = (person) => {
    var _a;
    return `Hello ${(_a = person.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}`;
};
console.log(greetPerson(person2));
//Enums 
//Unlike most TypeScript features, Enums are not a type-level addition to JS but something added to the language at runtime.
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
})(Days || (Days = {}));
console.log(Days.Monday);
