const { expect } = require('chai');
const HolidayPackage = require('./02-HolidayPackage');

describe('Test HolidayPackage Class functionality', () => {
  let hp;
  beforeEach(() => hp = new HolidayPackage('Japan', 'Spring'));

  describe('test Constructor', () => {
    it('should instantiate with default properties', () => {
      expect(hp.destination).to.equal('Japan');
      expect(hp.season).to.equal('Spring');
      expect(hp.vacationers).to.deep.equal([]);

      expect(hp.insuranceIncluded).to.equal(false);
      expect(() => hp.insuranceIncluded = 'а').to.throw(Error, 'Insurance status must be a boolean');
    });
  });

  describe('test .showVacationers() method', () => {
    it('should return -No- message when no vacationers added', () => {
      expect(hp.showVacationers()).to.equal('No vacationers are added yet');
    });

    it('should return full list of all vacationers', () => {
      hp.vacationers = ['Ivan Ivanov', 'Petar Petrov', 'Georgi Georgiev'];
      expect(hp.showVacationers()).to.equal(`Vacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev`);
    });
  });

  describe('test .addVacationer() method', () => {
    it('should throw error if invalind arg is passed', () => {
      expect(() => hp.addVacationer(' ')).to.throw(Error, 'Vacationer name must be a non-empty string');
      expect(() => hp.addVacationer(1)).to.throw(Error, 'Vacationer name must be a non-empty string');
      expect(() => hp.addVacationer()).to.throw(Error, 'Vacationer name must be a non-empty string');

      expect(() => hp.addVacationer('Ivan')).to.throw(Error, 'Name must consist of first name and last name');
    });

    it('should add new vacationer to array', () => {
      hp.addVacationer('Ivan Ivanov');
      expect(hp.vacationers).to.eql(['Ivan Ivanov'])
      hp.addVacationer('Petar Petrov');
      expect(hp.vacationers).to.eql(['Ivan Ivanov', 'Petar Petrov'])
    });
  });

  describe('test .generateHolidayPackage() method', () => {
    it('should throw error if no vacationers', () => {
      expect(() => hp.generateHolidayPackage()).to.throw(Error, 'There must be at least 1 vacationer added')
    });

    it('should calculate package comb #1', ()=>{
      hp.vacationers = ['Ivan Ivanov', 'Petar Petrov'];
      hp.insuranceIncluded = false;
      hp.season = 'Spring';
      expect(hp.generateHolidayPackage()).to.equal(`Holiday Package Generated\nDestination: Japan\nVacationers:\nIvan Ivanov\nPetar Petrov\nPrice: 800`);
    });

    it('should calculate package comb #2', ()=>{
      hp.vacationers = ['Ivan Ivanov', 'Petar Petrov'];
      hp.insuranceIncluded = false;
      hp.season = 'Summer';
      expect(hp.generateHolidayPackage()).to.equal(`Holiday Package Generated\nDestination: Japan\nVacationers:\nIvan Ivanov\nPetar Petrov\nPrice: 1000`);
    });

    it('should calculate package comb #3', ()=>{
      hp.vacationers = ['Ivan Ivanov', 'Petar Petrov'];
      hp.insuranceIncluded = true;
      hp.season = 'Winter';
      expect(hp.generateHolidayPackage()).to.equal(`Holiday Package Generated\nDestination: Japan\nVacationers:\nIvan Ivanov\nPetar Petrov\nPrice: 1100`);
    });

    it('should calculate package comb #3', ()=>{
      hp.vacationers = ['Ivan Ivanov', 'Petar Petrov'];
      hp.insuranceIncluded = true;
      hp.season = 'Spring';
      expect(hp.generateHolidayPackage()).to.equal(`Holiday Package Generated\nDestination: Japan\nVacationers:\nIvan Ivanov\nPetar Petrov\nPrice: 900`);
    });
  });
});