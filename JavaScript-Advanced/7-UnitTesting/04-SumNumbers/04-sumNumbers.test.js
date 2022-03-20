const { expect } = require('chai');
const sum = require('./04-sumNumbers');

describe('Sum number', function() {
  it ('sums single number', function(){
     expect(sum([1])).to.equal(1);
  })
})