const { expect } = require('chai');
const library = require('./solve')

describe('Test', () => {
  describe('test .calcPriceOfBook() method', () => {
    it('should throw Error when invalid inputs are passed', () => {
      expect(() => library.calcPriceOfBook(1, 2000)).to.throw(Error, "Invalid input");
      expect(() => library.calcPriceOfBook('a', 'b')).to.throw(Error, "Invalid input");
      expect(() => library.calcPriceOfBook('a')).to.throw(Error, "Invalid input");
      expect(() => library.calcPriceOfBook()).to.throw(Error, "Invalid input");
    });

    it('should return standard price when year is after 1980', () => {
      expect(library.calcPriceOfBook('A', 1981)).to.equal(`Price of A is 20.00`);
    });

    it('should return discounted price when year is before or 1980', () => {
      expect(library.calcPriceOfBook('A', 1980)).to.equal(`Price of A is 10.00`);
      expect(library.calcPriceOfBook('A', 1700)).to.equal(`Price of A is 10.00`);
    });
  });

  describe('test .findBook() method', () => {
    it('should throw Error if books arrays is empty', () => {
      expect(() => library.findBook([], 'book')).to.throw(Error, "No books currently available");
    });

    it('should return message if book is found', ()=> {
      expect(library.findBook(['A', 'B', 'C'], 'A')).to.equal("We found the book you want.");
      expect(library.findBook(['A', 'B', 'C'], 'B')).to.equal("We found the book you want.");
    });

    it('should retirn message if book is NOT found', ()=> {
      expect(library.findBook(['A', 'B', 'C'], 'D')).to.equal("The book you are looking for is not here!");
    });
  });

  describe('test .arrangeTheBooks() method', ()=> {
    it('should throw Error if input is not integer or is less than 0', ()=> {
      expect(()=>library.arrangeTheBooks('a')).to.throw(Error,"Invalid input");
      expect(()=>library.arrangeTheBooks(1.123)).to.throw(Error,"Invalid input");
      expect(()=>library.arrangeTheBooks(-1)).to.throw(Error,"Invalid input");
      expect(()=>library.arrangeTheBooks()).to.throw(Error,"Invalid input");
    });

    it('should return message if all books are arranged', ()=> {
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(10)).to.equal("Great job, the books are arranged.");
    });

    it('should return message if the space is not enough', ()=> {
      expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
      expect(library.arrangeTheBooks(100)).to.equal("Insufficient space, more shelves need to be purchased.");
    });
  });
});