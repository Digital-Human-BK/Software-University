type str = string;
type union = string | number;
type literal = 'hello';

//convert to more or less specific

let a: str = 'hello';
let b = a as union; //less specific type
let c = a as literal; // more specific type


//Type assertion/casting
const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if(c === 'add') return a + b;
  return '' + a + b;
};

const myVal: string = addOrConcat(2,2, 'concat') as string;

//Danger! TS sees no problem but string is returned
const myVal2: number = addOrConcat(2,2, 'concat') as number;

// 10 as string //TS finds the errors where it can
(10 as unknown) as string //double casting

//The DOM
const img = document.querySelector('img')!; //not null
const img2 = document.getElementById('#img') as HTMLImageElement;

img.src
img2.src