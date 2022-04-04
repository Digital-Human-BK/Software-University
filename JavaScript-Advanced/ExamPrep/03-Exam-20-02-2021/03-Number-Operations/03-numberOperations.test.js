const {expect} = require('chai');
const numberOperations = require('./03-numberOperations');

describe('Tests …', function() {
  describe('test .powerNum method', function() {
      it('should return the power of given num', function() {
          expect(numberOperations.powNumber(2)).to.equal(4);
      });
   });

   describe('test .numberChecker method', function(){
     it('should return less than 100 message', function(){
       expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
       expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
     });

     it('should return greather than 100 message', function(){
       expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
       expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
     });

     it('should throw error if passed in argument is not a number', function(){
      expect(()=> numberOperations.numberChecker('a')).to.throw();
      expect(()=> numberOperations.numberChecker()).to.throw();
     });
   });

   describe('test .sumArrays method', function(){
     it('should return new array with elements equal to sum of both arrays', function(){
       expect(numberOperations.sumArrays([1,1,1], [2,2,2]).toString()).to.equal('3,3,3');
       expect(numberOperations.sumArrays([], [2]).toString()).to.equal('2');
       expect(numberOperations.sumArrays([1], []).toString()).to.equal('1');
     });
   });   
});
