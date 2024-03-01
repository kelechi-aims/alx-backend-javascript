const { expect } =require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', -1.7, -2)).to.equal(-4);
      expect(calculateNumber('SUM', -1, -2.7)).to.equal(-4);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.7, -2)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1, -2.7)).to.equal(2);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', -1.7, -2)).to.equal(1);
      expect(calculateNumber('DIVIDE', -1.4, -4.6666)).to.equal(0.2);
    });

    it('should return Error when divisor is zero', () => {
      expect(calculateNumber('DIVIDE', -1.7, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
    });
  });
});
