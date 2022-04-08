const { expect } = require('chai');
const ChristmasMovies = require('./02-christmasMovies');

describe('Test ChristmasMovies class functionality', () => {
  let cm;
  beforeEach(() => cm = new ChristmasMovies());

  describe('test the Constructor', () => {
    it('should instantiate with no parameters and these properties', () => {
      expect(cm.movieCollection).to.deep.equal([]);
    });
  });

  describe('test .buyMovie() method', () => {
    it('should add movie to collection if movie is not present', () => {

      expect(cm.buyMovie('The Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Laurence Fishburne']))
        .to.equal(`You just got The Matrix to your collection in which Keanu Reeves, Laurence Fishburne are taking part!`);
    });

    it('should throw Error if movie is already in the collection', () => {
      cm.buyMovie('The Matrix', ['Keanu Reeves', 'Laurence Fishburne']);
      expect(() => cm.buyMovie('The Matrix', ['Keanu Reeves', 'Laurence Fishburne'])).to.throw(Error, 'You already own The Matrix in your collection!');
    });
  });

  describe('test .discardMovie() method', () => {
    it('should throw Error if movie is not in movieCollection', () => {
      expect(() => cm.discardMovie('A')).to.throw(Error, 'A is not at your collection!');
    });

    it('should delete movie from movieCollection if movie is present', () => {
      cm.buyMovie('A', ['B', 'C']);
      cm.watchMovie('A');
      cm.discardMovie('A');
      expect(cm.movieCollection.length).to.equal(0);
    });

    it('should return message if movie is watched', () => {
      cm.buyMovie('A', ['B', 'C']);
      cm.watchMovie('A');
      expect(cm.discardMovie('A')).to.equal('You just threw away A!');
    });

    it('should throw Error if movie is not watched', () => {
      cm.buyMovie('A', ['B', 'C']);
      expect(() => cm.discardMovie('A')).to.throw(Error, 'A is not watched!');
    });
  });

  describe('test .watchMovie() method', () => {
    it('should throw Error if movie to watch is not in movieCollection', () => {
      expect(() => cm.watchMovie('A')).to.throw(Error, 'No such movie in your collection!');
    });

    it('should add movie to watched list with initial value set to 1', () => {
      cm.buyMovie('A', ['B', 'C']);
      cm.watchMovie('A');
      expect(cm.watched['A']).to.equal(1);
      cm.watchMovie('A');
      expect(cm.watched['A']).to.equal(2);
    });
  });

  describe('test .favouriteMovie() method', () => {
    it('should throw error if no movies in watched list', () => {
      expect(() => cm.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
    });

    it('should return message for most watched movie', () => {
      cm.buyMovie('A', ['B', 'C']);
      cm.watchMovie('A');
      expect(cm.favouriteMovie())
        .to.equal('Your favourite movie is A and you have watched it 1 times!');

      cm.buyMovie('B', ['C', 'D']);
      cm.watchMovie('B');
      cm.watchMovie('B');
      expect(cm.favouriteMovie())
        .to.equal('Your favourite movie is B and you have watched it 2 times!');

    });
  });

  describe('test .mostStarredActors() method', () => {
    it('should should throw error if no movies in collection', () => {
      expect(() => cm.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
    });

    it('should return message for most starred actor', () => {
      cm.buyMovie('A', ['B', 'C']);
      cm.buyMovie('B', ['C', 'D']);
      cm.buyMovie('B2', ['C', 'E']);
      cm.buyMovie('B3', ['C', 'F']);
      expect(cm.mostStarredActor())
        .to.equal('The most starred actor is C and starred in 4 movies!')
    });
  });
});