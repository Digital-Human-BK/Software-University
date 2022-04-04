const { expect } = require('chai');
const testNumbers = require('./03-TestNumbers');

describe('Tests …', function () {
  describe('test .sumNumbers method', function () {
    it('should return sum when number arguments are passed', function () {
      expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
      expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
      expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
      expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
    });

    it('should return undefined when non-number arguments are passed', function () {
      expect(testNumbers.sumNumbers('', 1)).to.be.undefined;
      expect(testNumbers.sumNumbers(1, 'а')).to.be.undefined;
      expect(testNumbers.sumNumbers('а', 'а')).to.be.undefined;
      expect(testNumbers.sumNumbers(1)).to.be.undefined;
      expect(testNumbers.sumNumbers()).to.be.undefined;
    });
  });

  describe('test .numberChecker method', function () {
    it('should return -even number- message when even number is passed', function () {
      expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
      expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
      expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
      expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
      
      expect(testNumbers.numberChecker(2, 'a')).to.equal('The number is even!');
    });

    it('should return -odd number- message when odd number is passed', function () {
      expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
      expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
      expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
      expect(testNumbers.numberChecker(1, 'a')).to.equal('The number is odd!');
    });

    it('should throw Error when input is not a number', function () {
      expect(() => testNumbers.numberChecker('a')).to.throw();
      expect(() => testNumbers.numberChecker()).to.throw();
      expect(() => testNumbers.numberChecker()).to.throw();
    });
  });

  describe('test .averageSUmArray method', function(){
    it('should return average value of numbers array', function(){
      expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
    });
  });
});
