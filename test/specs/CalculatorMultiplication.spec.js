const Calculator = require("../../app/Calculator.js");
const chai = require("chai");
const { expect } = require("chai");
let calculator = new Calculator();

describe('multiplication of numbers positive script', function () {
  it('should return 21 when we enter 3 and 7', function () {
    expect(calculator.multiply(3, 7)).to.be.eql(21);
  });
  it('should return -20 when we enter 4 and -5', function () {
    expect(calculator.multiply(4, -5)).to.be.eql(-20);
  });

  it('should throw exception', function () {
    let callWithError = () => calculator.multiply('a', true);
    expect(callWithError).to.throw(`you can entre only numbers`);
  });
});
