const assert = require('assert');
const calc = require('./app.js').calc;

console.log(calc);

describe('General', function () {
  describe('.clearEntry()', function() {

  });

  describe('.clearValue()', function() {

  });

});

describe('Arithmetic', function () {

  describe('.add()', function () {
    before(function () {
      calc.value = 0;
    });

    it('0 + 2 = 2', function () {
      calc.entry = 2;
      assert.equal(calc.add(), 2);
    });

    it('2 + -4 = -2', function () {
      calc.entry = -4;
      assert.equal(calc.add(), -2);
    });

    it('-2 + 8 = 6', function () {
      calc.entry = 8;
      assert.equal(calc.add(), 6);
    });
  });

  describe('.sub()', function () {
    before(function () {
      calc.value = 0;
    });

    it('0 - 2 = -8', function () {
      calc.entry = 8;
      assert.equal(calc.sub(), -8);
    });

    it('8 - -20 = 12', function () {
      calc.entry = -20;
      assert.equal(calc.sub(), 12);
    });

    it('12 - 2 = 10', function () {
      calc.entry = 2;
      assert.equal(calc.sub(), 10);
    });
  });

  describe('.mult()', function () {
    before(function () {
      calc.value = 2;
    });

    it('2 * 5 = 10', function () {
      calc.entry = 5;
      assert.equal(calc.mult(), 10);
    });

    it('10 * 1 = 10', function () {
      calc.entry = 1;
      assert.equal(calc.mult(), 10);
    });

    it('10 * .3 = 3', function () {
      calc.entry = 0.3;
      assert.equal(calc.mult(), 3);
    });

    it('X * 0 = 0', function () {
      calc.value = 234;
      calc.clearEntry();
      assert.equal(calc.mult(), 0);
      calc.value = 2;
      calc.clearEntry();
      assert.equal(calc.mult(), 0);
      calc.value = 76324235;
      calc.clearEntry();
      assert.equal(calc.mult(), 0);
    });

    it('0 * X = 0', function () {
      calc.clearValue();
      calc.entry = 463;
      assert.equal(calc.mult(), 0);
      calc.clearValue();
      calc.entry = -43;
      assert.equal(calc.mult(), 0);
      calc.clearValue();
      calc.entry = 0.3;
      assert.equal(calc.mult(), 0);
      calc.clearValue();
      calc.entry = -0.3;
      assert.equal(calc.mult(), 0);
    });
  });

  describe('.div()', function () {
    before(function () {
      calc.value = 2;
    });

    it('2 / 1 = 2', function () {
      calc.entry = 1;
      assert.equal(calc.div(), 2);
    });

    it('2 / 4 = .5', function () {
      calc.entry = 4;
      assert.equal(calc.div(), 0.5);
    });

    it('0 / X = 0', function () {
      calc.clearValue();
      calc.entry = 0.2;
      assert.equal(calc.div(), 0);
      calc.clearValue();
      calc.entry = 1;
      assert.equal(calc.div(), 0);
      calc.clearValue();
      calc.entry = -24;
      assert.equal(calc.div(), 0);
      calc.clearValue();
      calc.entry = 412;
      assert.equal(calc.div(), 0);
    });

    it('X / 0 = Infinity', function () {
      calc.value = 1;
      calc.clearEntry();
      assert.equal(calc.div(), Infinity);
      calc.value = -2;
      calc.clearEntry();
      assert.equal(calc.div(), -Infinity);
      calc.value = 0.4;
      calc.clearEntry();
      assert.equal(calc.div(), Infinity);
      calc.value = -0.9;
      calc.clearEntry();
      assert.equal(calc.div(), -Infinity);
    });
  });
});
