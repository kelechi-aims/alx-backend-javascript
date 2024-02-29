const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round up the first argument', function() {
    assert.strictEqual(calculateNumber(1.1, 3), 4);
    assert.strictEqual(calculateNumber(1.6, 3), 5);
    assert.strictEqual(calculateNumber(1.9, 3), 5);
    assert.strictEqual(calculateNumber(1.0, 3), 4);
  });

  it('should round up the second argument', function() {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1, 4.7), 6);
  });

it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });	
});
