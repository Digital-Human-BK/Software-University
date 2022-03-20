const { expect } = require('chai');
const createCalculator = require('./07-addSubtract');

describe('createCalculator test', () => {
  let calc;
  beforeEach(() => {
   calc = createCalculator();
  })


  it('get() should return 0 when called first', () => {
    expect(calc.get()).to.equal(0);
  });

  it('get() should retun 2 when add(1) and add(1)', () => {
    calc.add(2);
    calc.add(3);
    expect(calc.get()).to.equal(5);
  });

  it('get() should return -1 when subtract(1) ', () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });

  it('get() should return 1 when add(1), subtract(1), add(1)', () => {
    calc.add(1);
    calc.subtract(1);
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });

  it('get() should return NaN when string is passed to add()', () => {
    calc.add('str');
    expect(calc.get()).to.be.NaN;
  });

  it('get should return NaN when string is passed to subtract()', () => {
    calc.subtract('str');
    expect(calc.get()).to.be.NaN;
  });
});