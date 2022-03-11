const assert = require('assert');
const calc = require('./app.js').calc;

describe('Arithmetic', function () {

  describe('.add()', function () {
    it('2 + 2 = 4', function () {
      assert.equal(calc.add(2,2), 4);
    });

    it('-2 + 2 = 0', function () {
      assert.equal(calc.add(-2,2), 0);
    });
  });

  describe('.sub()', function () {
    it('2 - 2 = 0', function () {
      assert.equal(calc.sub(2,2), 0);
    });

    it('22 - 2 = 20', function () {
      assert.equal(calc.sub(22,2), 20);
    });

    it('-2 - 2 = 20', function () {
      assert.equal(calc.sub(-2,2), -4);
    });

    it('2 - -2 = 20', function () {
      assert.equal(calc.sub(2,-2), 4);
    });
  });

  describe('.mult()', function () {
    it('2 * 5 = 10', function () {
      assert.equal(calc.mult(2,5), 10);
    });

    it('3 * 7 = 21', function () {
      assert.equal(calc.mult(3,7), 21);
    });

    it('X * 0 = 0', function () {
      assert.equal(calc.mult(234,0), 0);
      assert.equal(calc.mult(2,0), 0);
      assert.equal(calc.mult(76324235,0), 0);
    });

    it('0 * X = 0', function () {
      assert.equal(calc.mult(0,1354124), 0);
      assert.equal(calc.mult(0,323), 0);
      assert.equal(calc.mult(0,5342623), 0);
    });
  });

  describe('.div()', function () {
    it('1 / 2 = .5', function () {
      assert.equal(calc.div(1,2), 0.5);
    });

    it('6 / 2 = 3', function () {
      assert.equal(calc.div(6,2), 3);
    });

    it('0 / X = 0', function () {
      assert.equal(calc.div(0,1235132), 0);
      assert.equal(calc.div(0,347), 0);
      assert.equal(calc.div(0,-72), 0);
      assert.equal(calc.div(0,0.2), 0);
    });

    it('X / 0 = Infinity', function () {
      assert.equal(calc.div(1325123512,0), Infinity);
      assert.equal(calc.div(1,0), Infinity);
      assert.equal(calc.div(-2,0), -Infinity);
      assert.equal(calc.div(0.4,0), Infinity);
      assert.equal(calc.div(4212,0), Infinity);
      assert.equal(calc.div(1241245125,0), Infinity);
    });
  });
});
