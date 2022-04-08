const { expect } = require('chai');
const Repository = require('./02-repository.js');

describe('Tests Repository class functionality', function () {
    let rep;
    beforeEach(function () {
        rep = new Repository({ name: 'string', age: 'number', birthday: 'object' });
    });

    describe('test instance.count getter', function () {
        it('should return 0 on fresh instance', function () {
            expect(rep.count).to.equal(0);
        });
    });

    describe('test .add() method', function () {
        it('should add new entity to this.data', function () {
            expect(rep.add({ name: 'John', age: 20, birthday: {} })).to.equal(0);
        });
    });

    describe('test .getId() method', function () {

        it('should throw Error if no entity at given ID', function () {
            expect(() => rep.getId(0)).to.throw(Error);
        });
    });

    describe('test .update() method', function () {

        it('should throw Error if passed in Id does not exist', function () {
            expect(() => rep.update(0, { name: 'John', age: 20, birthday: {} })).to.throw(Error)
        });

        it('should throw Error if any of the passed in entity properties is invalid type', function () {
            rep.add({ name: 'John', age: 20, birthday: {} });
            expect(() => rep.update(0, { name: 1, age: 20, birthday: {} })).to.throw(TypeError)
        });
    });

    describe('test .del() method', function () {
        it('should throw Error when entity with given ID does not exist', function () {
            expect(() => rep.del(0)).to.throw(Error);
        });

        it('should delete entity with given ID', function(){
            rep.add({name: 'John', age: 20, birthday: {}});
            rep.add({name: 'John', age: 20, birthday: {}});
            rep.add({name: 'John', age: 20, birthday: {}});
            rep.del(1);
            expect(rep.count).to.equal(2);
            expect(rep.data.has(1)).to.equal(false);
        });
    });
});