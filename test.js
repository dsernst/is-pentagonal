/*global describe,it*/

var should = require('should');
var isPentagonal = require('./index.js');

describe('isPentagonal(number)', function () {
  it('should return true for pentagonal numbers', function () {
    var first10Pentagonals = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145];

    first10Pentagonals.every(isPentagonal).should.eql(true);
  });

  it('should return false for numbers that are not pentagonal', function () {
    [36, 18, 25, 49].some(isPentagonal).should.eql(false);
  });
});
