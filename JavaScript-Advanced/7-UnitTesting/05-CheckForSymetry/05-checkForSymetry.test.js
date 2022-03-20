const { expect } = require('chai');
const isSymmetric = require('./05-checkForSymetry');

describe('is symetric array', function () {
  it('returns true for valid symmetric input', function () {
    expect(isSymmetric([1, 1])).to.equal(true)
  });

  it('returns false for valid non-symmetric input', function () {
    expect(isSymmetric([1, 2])).to.equal(false);
  });

  it('returns false for invalid argument', function () {
    expect(isSymmetric('a')).to.equal(false);
  });
  it('returns false for different element types', function(){
    expect(isSymmetric([1, '1'])).to.be.false;
  });

  //test overloading
  it('returns true for valid symetric odd-element array', function () {
    expect(isSymmetric([1, 1, 1])).to.equal(true);
  });

  it('returns true for valid symmetric string array', function () {
    expect(isSymmetric(['a', 'a'])).to.equal(true);
  });

  it('returns false for valid non-symmetric string array', function () {
    expect(isSymmetric(['a', 'b'])).to.equal(false);
  });
});