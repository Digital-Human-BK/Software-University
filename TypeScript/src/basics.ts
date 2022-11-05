let myName: string;
let myNum: number;
let isLoading: boolean;
let type: any;
let unionType: string | number;
let re: RegExp;

myName = 'Mike';
myNum = 35;
isLoading = true;
type = 22;
unionType = 33;
unionType = 'Chester';
re = /\w+/g;

const sum = (a: number , b: number) => {
  return a + b;
}