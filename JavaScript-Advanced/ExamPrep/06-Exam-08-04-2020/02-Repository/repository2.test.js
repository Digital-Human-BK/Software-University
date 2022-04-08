const { expect } = require('chai');
const Repository = require('./02-repository.js');

describe('Tests Repository class functionality', function () {
    let rep;
    beforeEach(function () {
        rep = new Repository({ name: 'string', age: 'number', birthday: 'object' });
    });
    // describe('constructor', function(){
    //     it('should instatiate correctly', function(){
    //         expect(rep.props.name).to.equal('string');
    //         expect(rep.props.age).to.equal('number');
    //         expect(rep.props.birthday).to.equal('object');
    //         expect(rep.data.size).to.equal(0);
    //     })
    // })

    describe('test instance.count getter', function () {
        it('should return 0 on fresh instance', function () {
            expect(rep.count).to.equal(0);
        });
    });

    describe('test .add() method', function () {
        it('should add new entity to this.data', function () {
            expect(rep.add({ name: 'John', age: 20, birthday: {} })).to.equal(0);
        });
        // it('should throw Type Error if any entity prop is invalid', function () {
        //     expect(() => rep.add({ name: 1, age: 20, birthday: {} })).to.throw(TypeError)
        // });
        // it('should throw Error if any entity prop is missing', function () {
        //     expect(() => rep.add({age: 20, birthday: {} })).to.throw(Error)
        // });
    });

    describe('test .getId() method', function () {
        // it('should return the entity with given ID', function () {
        //     let entity = { name: 'John', age: 20, birthday: {} }
        //     rep.add(entity);
        //     expect(rep.getId(0)).to.equal(entity);
        // });

        it('should throw Error if no entity at given ID', function () {
            expect(() => rep.getId(0)).to.throw(Error);
        });
    });

    describe('test .update() method', function () {
        // it('should replace entity with given ID with new one', function () {
        //     let entity = {name: 'John', age: 20, birthday: {}};
        //     let newEntity = {name: 'Mike', age: 30, birthday: {}};
        //     rep.add(entity);
        //     rep.update(0, newEntity);
        //     expect(rep.getId(0)).to.equal(newEntity);
        //     expect(rep.count).to.equal(1);
        // });
        it('should throw Error if passed in Id does not exist', function () {
            expect(() => rep.update(0, { name: 'John', age: 20, birthday: {} })).to.throw(Error)
        });

        // it('should throw Error if passed in entity has missing prop', function () {
        //     rep.add({ name: 'John', age: 20, birthday: {} });
        //     expect(() => rep.update(0, { age: 30, birthday: {} })).to.throw(Error)
        //     expect(() => rep.update(0, { name: 'Mike', birthday: {} })).to.throw(Error)
        //     expect(() => rep.update(0, { name: 'Mike', age: 30 })).to.throw(Error)
        // });

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