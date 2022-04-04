const {expect} = require('chai');
const dealership = require('./03-dealership');

describe('Tests …', function() {
  describe('test .newCarCost method', function() {

      it('should deduct price when eligible oldCar is passed', function() {
          expect(dealership.newCarCost('Audi A4 B8', 15001)).to.equal(1);
          expect(dealership.newCarCost('Audi A4 B8', 15000)).to.equal(0);
      });

      it('should return second argument(price) when non eligible car is passed', function(){
        expect(dealership.newCarCost('Honda Accord K24', 1)).to.equal(1);
      });
   });

   describe('test .carEqipment method', function(){

    it('should return selected extras', function(){
      expect(dealership.carEquipment(['a','b','c','d'], [0]).toString()).to.equal('a');
      expect(dealership.carEquipment(['a','b','c','d'], [0, 3]).toString()).to.equal('a,d');
    });
   });
   
   describe('test .euroCategory method', function(){
    it('should return no discount message when EURO is less that 4', function(){
      expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
    });

    it('should return discounted price message when EURO is bigger than 3', function(){
      let price = dealership.newCarCost('Audi A6 4K', 35000);
      let total = price - (price * 0.05);
      expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${total}.`)
    })
   });
});
