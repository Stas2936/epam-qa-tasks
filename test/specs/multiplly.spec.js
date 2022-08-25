const Calculator = require("../../app/Calculator.js");
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe(`multiplication of numbers positive script`, function () {
  let addit;
  beforeEach(function () {
    addit = new Calculator();
    spy = chai.spy.on(addit, "multiply");
  });
  afterEach(function () {
    addit = null;
  });
  it(`should return 21 when we enter 3 and 7`, function () {
    expect(addit.multiply(3, 7)).to.be.eql(21);
  });
  it(`should return -20 when we enter 4 and -5`, function () {
    expect(addit.multiply(4, -5)).to.be.eql(-20);
  });

  it(`should throw exception`, function () {
    let callWithError = () => addit.multiply("a", true);
    expect(spy).to.be.a.spy;
    expect(callWithError).to.throw(`you can entre only numbers`);
  });
});
