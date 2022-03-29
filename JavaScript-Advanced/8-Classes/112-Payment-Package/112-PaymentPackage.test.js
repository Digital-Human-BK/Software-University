const { expect } = require('chai');
const PaymentPackage = require('./112-PaymentPackage');

describe('PaymentPackage functionality test', () => {

  describe('constructor', () => {
    it('should instatiate when two arguments are passed(string name & number value)', () => {
      let pp = new PaymentPackage('HR Services', 1500);

      expect(pp.toString()).to.equal(`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
      expect(pp.name).to.equal('HR Services');
      expect(pp.value).to.equal(1500);
      expect(pp.VAT).to.equal(20);
      expect(pp.active).to.equal(true);
    });

    it('should throw error if just one argument is passed', () => {
      expect(() => new PaymentPackage('a')).to.throw(Error);
      expect(() => new PaymentPackage(1)).to.throw(Error);
    });

    it('should throw error if no argument is passed', () => {
      expect(() => new PaymentPackage()).to.throw(Error);
    });


  });

  describe('accessor .name', () => {
    it('should return name when valid argumets are passed', ()=> {
      let pp = new PaymentPackage('a', 1);
      expect(pp.name).to.equal('a');
    });
    it('should throw error when non-string or empty string is passed', ()=> {
      expect(()=>new PaymentPackage(1, 1)).to.throw(Error);
      expect(()=>new PaymentPackage(false, 1)).to.throw(Error);
      expect(()=>new PaymentPackage(null, 1)).to.throw(Error);
      expect(()=>new PaymentPackage([], 1)).to.throw(Error);
      expect(()=>new PaymentPackage({}, 1)).to.throw(Error);

      expect(()=>new PaymentPackage('', 1)).to.throw(Error);
    });
  });

  describe('accessor .value', () => {
    it('should return value when valid argumets are passed', ()=> {
      let pp = new PaymentPackage('a', 1);
      expect(pp.value).to.equal(1);
    });
    it('should throw error when non number or negative number is passed', ()=> {
      expect(()=>new PaymentPackage('a', 'b')).to.throw(Error);
      expect(()=>new PaymentPackage('a', undefined)).to.throw(Error);
      expect(()=>new PaymentPackage('a', null)).to.throw(Error);
      expect(()=>new PaymentPackage('a', [])).to.throw(Error);
      expect(()=>new PaymentPackage('a', {})).to.throw(Error);

      expect(()=>new PaymentPackage('a', -1)).to.throw(Error);
    });
  });

  describe('accessor .VAT', ()=> {
    it('should return VAT when valid arguments are passed', ()=> {
      let pp = new PaymentPackage('a', 100);
      expect(pp.VAT).to.equal(20);

      pp.VAT = 30;
      expect(pp.VAT).to.equal(30);

      pp.VAT = 0;
      expect(pp.VAT).to.equal(0);
    });

    it('should throw error when VAT is set to non number or negative value', ()=> {
      let pp = new PaymentPackage('a', 100);
      expect(()=> pp.VAT = 'a').to.throw(Error);
      expect(()=> pp.VAT = '').to.throw(Error);
      expect(()=> pp.VAT = null).to.throw(Error);
      expect(()=> pp.VAT = undefined).to.throw(Error);
      expect(()=> pp.VAT = []).to.throw(Error);

      expect(()=> pp.VAT = -1).to.throw(Error);
    });
  });

  describe('accessor .active', ()=> {
    it('should return true when valid arguments are passed', ()=> {
      let pp = new PaymentPackage('a', 100);
      expect(pp.active).to.be.true;
      pp.active = false;
      expect(pp.active).to.be.false;
    });

    it('should throw error when .active is set to non boolean value', ()=> {
      let pp = new PaymentPackage('a', 100);
      expect(()=> pp.active = 1).to.throw(Error);
      expect(()=> pp.active = 'a').to.throw(Error);
      expect(()=> pp.active = '').to.throw(Error);
      expect(()=> pp.active = null).to.throw(Error);
      expect(()=> pp.active = undefined).to.throw(Error);
      expect(()=> pp.active = []).to.throw(Error);
    });
  });

  describe('.toString', ()=> {
    it('should return string containing overview of the instance', ()=>{
      let pp = new PaymentPackage('HR Services', 1500);

      expect(pp.toString()).to.equal(`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });

    it('should return string containing overview of the instance', ()=>{
      let pp = new PaymentPackage('HR Services', 0);

      expect(pp.toString()).to.equal(`Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0`);
    });

    it('should append label "(inactive)" if the package.active=false ', ()=>{
      let pp = new PaymentPackage('HR Services', 1500);
      pp.active = false;
      expect(pp.toString()).to.equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });
  })
});