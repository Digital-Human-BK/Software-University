const { expect } = require('chai');
const mathEnforcer = require('./104-mathEnforcer');

describe('test mathEnforcer functionality', () => {

  describe('test -addFive- method', () => {
    it('should return undefined when parameter is NOT a Number', () => {
      expect(mathEnforcer.addFive('a')).to.be.undefined;
      expect(mathEnforcer.addFive('1')).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
      expect(mathEnforcer.addFive(false)).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
    });
    it('should add 5 to given number parameter', () => {
      expect(mathEnforcer.addFive(0)).to.equal(5);
      expect(mathEnforcer.addFive(-1)).to.equal(4);
      expect(mathEnforcer.addFive(1)).to.equal(6);
      expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    });
  });

  describe('test -subtractTen- method', () => {
    it('should return undefined when parameter is NOT a Number', () => {
      expect(mathEnforcer.subtractTen('a')).to.be.undefined;
      expect(mathEnforcer.subtractTen('1')).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
      expect(mathEnforcer.subtractTen(false)).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });
    it('should subtract 10 from given number parameter', () => {
      expect(mathEnforcer.subtractTen(11)).to.equal(1);
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
      expect(mathEnforcer.subtractTen(-1.5)).to.equal(-11.5);
    });
  });

  describe('test -sum- method', () => {
    it('should return undefined if any of the parameter is NOT a number', () => {
      expect(mathEnforcer.sum('a', 'a')).to.be.undefined;
      expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
      expect(mathEnforcer.sum('a', 1)).to.be.undefined;
      expect(mathEnforcer.sum('1', '1')).to.be.undefined;
      expect(mathEnforcer.sum(null, undefined)).to.be.undefined;
      expect(mathEnforcer.sum(false, [])).to.be.undefined;
      expect(mathEnforcer.sum(true, {})).to.be.undefined;
    });
    it('should return sum of first and second number parameters', () => {
      expect(mathEnforcer.sum(0,1)).to.equal(1);
      expect(mathEnforcer.sum(1,1)).to.equal(2);
      expect(mathEnforcer.sum(-1,1)).to.equal(0);
      expect(mathEnforcer.sum(1.5, 1)).to.equal(2.5);
      expect(mathEnforcer.sum(1.5,1.5)).to.equal(3);
    });
  });
});