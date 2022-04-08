const { expect } = require('chai')
const pizzUni = require('./03-pizzaPlace');

describe('Test functionallity', function () {
  describe('test .makeAnOrder method', function () {
    it('should return confirmation message with valid arg passed', function () {

      expect(pizzUni.makeAnOrder({ orderedPizza: 'Peperoni' })).to.equal(`You just ordered Peperoni`);
      expect(pizzUni.makeAnOrder({ orderedPizza: 'Peperoni', orderedDrink: 'Coca-Cola' }))
        .to.equal(`You just ordered Peperoni and Coca-Cola.`);
    });

    it('should throw error if argument is not an object or the object doesnt have .orderedPizza and .orderedDrink properties', function () {
      expect(() => pizzUni.makeAnOrder({})).to.throw();
      expect(() => pizzUni.makeAnOrder({ noPizza: 'nullTest' })).to.throw();
      expect(() => pizzUni.makeAnOrder('a')).to.throw();
    });
  });

  describe('test .getRemainingWork method', function () {
    it('should return -All orders are complete!- if no orders left', function () {
      const test = [{ pizzaName: 'Peperoni', status: 'ready' }, { pizzaName: 'Margarita', status: 'ready' }];
      const expected = 'All orders are complete!'
      expect(pizzUni.getRemainingWork(test)).to.equal(expected);
      const test2 = [];
      expect(pizzUni.getRemainingWork(test2)).to.equal(expected);
    });

    it('should return -The following pizzas are still preparing:- if no orders left', function () {
      const test = [{ pizzaName: 'Peperoni', status: 'preparing' }, { pizzaName: 'Margarita', status: 'ready' }];
      const expected = 'The following pizzas are still preparing: Peperoni.';
      expect(pizzUni.getRemainingWork(test)).to.equal(expected);

      const test2 = [{ pizzaName: 'Peperoni', status: 'preparing' }, { pizzaName: 'Margarita', status: 'preparing' }];
      const expected2 = 'The following pizzas are still preparing: Peperoni, Margarita.';
      expect(pizzUni.getRemainingWork(test2)).to.equal(expected2);
    });
  });

  describe('test .orderTypeMethod', function(){
    it('should return total sum', function(){
      expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
      expect(pizzUni.orderType(0, 'Carry Out')).to.equal(0);

      expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
      expect(pizzUni.orderType(0, 'Delivery')).to.equal(0);
    });
  });
});