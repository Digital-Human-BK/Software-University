"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; // more specific type
//Type assertion/casting
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const myVal = addOrConcat(2, 2, 'concat');
//Danger! TS sees no problem but string is returned
const myVal2 = addOrConcat(2, 2, 'concat');
// 10 as string //TS finds the errors where it can
10; //double casting
//The DOM
const img = document.querySelector('img'); //not null
const img2 = document.getElementById('#img');
img.src;
img2.src;
