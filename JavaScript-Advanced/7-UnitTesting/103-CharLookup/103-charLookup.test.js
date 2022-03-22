const { expect } = require('chai');
const lookupChar = require('./103-charLookup');

describe('test charLookUp', () => {
  //undefined case
  it('should return undefined when first parameter is not a string', () => {
    expect(lookupChar(1, 1)).to.be.undefined;
  });
  it('should return undefined when second parameter is not a number', () => {
    expect(lookupChar('a', 'b')).to.be.undefined;

  });
  it('should return undefined when both parameters are not valid type', () => {
    expect(lookupChar(1, 'a')).to.be.undefined;
  });
  it('should return undefined when second parameter is not integer', () => {
    expect(lookupChar('a', 1.5)).to.be.undefined;
  });
  //incorrect index case
  it('returns "Incorrect index" when index >= length', () => {
    expect(lookupChar('a', 1)).to.equal('Incorrect index');
  });
  it('returns "Incorrect index" when index < 0', () => {
    expect(lookupChar('a', -1)).to.equal('Incorrect index');
  });
  //happy case
  it('returns the characker at the specified index', () => {
    expect(lookupChar('a', 0)).to.equal('a');
  });
  it('returns the characker at the specified index', () => {
    expect(lookupChar('Hi', 1)).to.equal('i');
  });
});