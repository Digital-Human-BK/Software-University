class Hex {
  constructor(n){
    this._value = Number(n);
  }
  valueOf(){
    return this._value;
  }
  toString(){
    return `0x${this._value.toString(16).toLocaleUpperCase()}`;
  }
  plus(num){
    const x = this._value + Number(num.valueOf());
    return new Hex(x);
  }
  minus(num){
    const x = this._value - Number(num.valueOf());
    return new Hex(x);
  }
  parse(string) {
    return parseInt(string, 16)
  }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('0xF'));