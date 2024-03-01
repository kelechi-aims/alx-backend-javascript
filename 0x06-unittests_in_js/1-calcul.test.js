const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.7, -2), -4);
      assert.strictEqual(calculateNumber('SUM', -1, -2.7), -4);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.7, -2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -2.7), 2);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.7, -2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', -4, -2.1), 2);
    });
  });
});
