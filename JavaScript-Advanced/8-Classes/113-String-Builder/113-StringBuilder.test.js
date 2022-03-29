const { expect } = require('chai');
const StringBuilder = require('./113-StringBuilder');

describe('StringBuilder', () => {

  describe('constructor', () => {
    it('should initiate when string argument is passed', () => {
      let sb = new StringBuilder('abc');
      expect(sb.toString()).to.equal('abc');

      let sb2 = new StringBuilder('');
      expect(sb2.toString()).to.equal('');
    });

    it('should initiate with empty array if undefined is passed', () => {
      let sb = new StringBuilder(undefined);
      expect(sb.toString()).to.equal('');
    });

    it('should throw type error when non-string argument is passed', () => {
      expect(() => new StringBuilder(1)).to.throw(TypeError);
      expect(() => new StringBuilder(null)).to.throw(TypeError);
      expect(() => new StringBuilder(false)).to.throw(TypeError);
      expect(() => new StringBuilder({})).to.throw(TypeError);
    });
  });

  describe('append method', () => {
    it('should add passed in string to the end of storage', () => {
      let sb1 = new StringBuilder('a');
      sb1.append('bc');
      expect(sb1.toString()).to.equal('abc');

      let sb2 = new StringBuilder('');
      sb2.append('a');
      expect(sb2.toString()).to.equal('a');

      let sb3 = new StringBuilder('a');
      sb3.append('');
      expect(sb3.toString()).to.equal('a');

      let sb = new StringBuilder('a');
      let argument1 = 'b'
      let expected1 = 'ab';
      sb.append(argument1);
      expect(sb.toString()).to.equal(expected1);
      let argument2 = 'c';
      let expected2 = 'abc';
      sb.append(argument2);
      expect(sb.toString()).to.equal(expected2);
    });

    it('should throw type error when non-string argument is passed', () => {
      let sb = new StringBuilder('a');
      expect(() => sb.append(1)).to.throw(TypeError);
      let sb2 = new StringBuilder('b');
      expect(() => sb2.append(undefined)).to.throw(TypeError);
    })
  });

  describe('prepend method', () => {
    it('should add passed in string to the start of storage', () => {
      let sb1 = new StringBuilder('a');
      sb1.prepend('b');
      expect(sb1.toString()).to.equal('ba');

      let sb2 = new StringBuilder('');
      sb2.prepend('a');
      expect(sb2.toString()).to.equal('a');

      let sb3 = new StringBuilder('a');
      sb3.prepend('');
      expect(sb3.toString()).to.equal('a');

      let sb = new StringBuilder('a');
      let argument1 = 'b'
      let expected1 = 'ba';
      sb.prepend(argument1);
      expect(sb.toString()).to.equal(expected1);
      let argument2 = 'c';
      let expected2 = 'cba';
      sb.prepend(argument2);
      expect(sb.toString()).to.equal(expected2);
    });

    it('should throw type error when non-string argument is passed', () => {
      let sb = new StringBuilder('a');
      expect(() => sb.prepend(1)).to.throw(TypeError);
      let sb2 = new StringBuilder('b');
      expect(() => sb2.prepend(undefined)).to.throw(TypeError);
    })
  });

  describe('insertAt method', () => {
    it('should insert passed in string at given index', () => {
      let sb = new StringBuilder('My');
      sb.insertAt('This', 0);
      expect(sb.toString()).to.equal('ThisMy');
      sb.insertAt('Test', 6);
      expect(sb.toString()).to.equal('ThisMyTest');
      sb.insertAt('Is', 4);
      expect(sb.toString()).to.equal('ThisIsMyTest');
    });

    it('should throw type error when non-string argument is passed', () => {
      let index = 0;

      let sb = new StringBuilder();
      expect(() => sb.insertAt(1, index)).to.throw(TypeError);

      let sb2 = new StringBuilder('abc');
      expect(() => sb2.insertAt(true, index)).to.throw(TypeError);
    });
  });

  describe('remove method', () => {
    it('should remove elements from at correct index', () => {
      let sb = new StringBuilder('abc');
      sb.remove(1, 1);
      expect(sb.toString()).to.equal('ac');
      sb.remove(0, 2);
      expect(sb.toString()).to.equal('');
    });
  });

  describe('toString method', () => {
    it('should return empty string when no argument is passed', () => {
      let sb = new StringBuilder();
      expect(sb.toString()).to.equal('');
    });

    it('should return correct strung when called', () => {
      let sb = new StringBuilder('a');
      expect(sb.toString()).to.equal('a');
      let sb2 = new StringBuilder('abc');
      expect(sb2.toString()).to.equal('abc');
    })
  });
});