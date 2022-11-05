"use strict";
//Literal types
let literalName;
// literalName = 'Mike' //name can only be Dave
let userName;
// userName = 'Amy' //name can only be either Mike or Chester
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
const subtract = function (c, d) {
    return c - d;
};
const multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 6));
//optional param
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
//default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));
//never
//function that explicitly throws an error or infinite loop
const throwError = (errMsg) => {
    throw new Error(errMsg);
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return throwError('This should never happen');
};
