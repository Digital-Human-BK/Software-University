const { expect } = require('chai');
const isOddOrEven = require('./102-evenOrOdd');

describe('isOddOrEven', () => {
  it('invalid input should return undefined', () => {
    expect(isOddOrEven(1)).to.be.undefined;
  });
  it('should return even when string with length 2 is passed', ()=> {
    expect(isOddOrEven('aa')).to.equal('even');
  });
  it('should return odd when string with length 1 is passed', ()=> {
    expect(isOddOrEven('a')).to.equal('odd');
  });

  //test overloading
  it('should return even when "testString" is passed', ()=> {
    expect(isOddOrEven('testString')).to.equal('even');
  });
  it('should return odd when "testStr" is passed', ()=> {
    expect(isOddOrEven('testStr')).to.equal('odd');
  });
  it('should return even when empty string is passed', ()=>{
    expect(isOddOrEven('')).to.equal('even');
  });
});