const Calculator = require("../../app/Calculator.js");
const chai = require("chai");
const { expect } = require("chai");
let calculator = new Calculator();

describe('additio1n of numbers positive script', function () {
  it('should retrun sum 10', function () {
    expect(calculator.add(3, 7)).to.be.eql(10);
  });
  it('should return sum -1', function () {
    expect(calculator.add(4, -5)).to.be.eql(-1);
  });
  it('should throw exception', function () {
    let callWithError = () => calculator.add('a', 'b');
    expect(callWithError).to.throw('you can entre only numbers');
  });
});
