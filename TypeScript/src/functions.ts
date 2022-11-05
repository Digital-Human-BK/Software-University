//Type Aliases
type stringOrNumber = string | number;
type strOrNumArr = (string | number)[];

type userId = stringOrNumber;

type Person = {
  name: string;
  active: boolean;
  albums: strOrNumArr;
};

//Literal types
let literalName: 'Dave';
// literalName = 'Mike' //name can only be Dave
let userName: 'Mike' | 'Chester';
// userName = 'Amy' //name can only be either Mike or Chester

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));

const subtract = function (c: number, d: number): number {
  return c - d;
};

//Or using type alias
type mathFunc = (a: number, b: number) => number;

const multiply: mathFunc = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 6));

//optional param
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));

//default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));

//never
//function that explicitly throws an error or infinite loop
const throwError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

//use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return throwError('This should never happen');
};
