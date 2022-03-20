const { expect } = require('chai')
const rgbToHexColor = require('./06-RGBtoHex');

// Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// Return undefined if any of the input parameters are of invalid type or not in the expected range

describe('RGBtoHEX', () => {
  
  it('converts black to hex black', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('converts white to hex white', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('converts rgb(59, 165, 73) to hex #3ba549', ()=> {
    expect(rgbToHexColor(59, 165, 73)).to.equal('#3BA549');
  });

  it('check if first element is less than 0', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
  });

  it('check if second element is less than 0', () => {
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
  });

  it('check if third element is less than 0', () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('check if first element is bigger than 255', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
  });

  it('check if second element is bigger than 255', () => {
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
  });

  it('check if third element is bigger than 255', () => {
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it('check first arg type', () => {
    expect(rgbToHexColor('a', 1, 1)).to.be.undefined;
  });

  it('check second arg type', () => {
    expect(rgbToHexColor(1, 'a', 1)).to.be.undefined;
  });

  it('check third arg type', () => {
    expect(rgbToHexColor(1, 1, 'a')).to.be.undefined;
  });
});