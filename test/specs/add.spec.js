const Calculator = require('../../app/Calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe(`addition of numbers positive script`, function() {
  let addition;
  beforeEach(function() {
    addition = new Calculator();
    spy = chai.spy.on(addition, 'add');
  });
  afterEach(function() {
    addition = null;
  });
  it(`should retrun sum 10`, function() {
    expect(addition.add(3, 7)).to.be.eql(10);
  });
  it(`should return sum -1`, function() {
    expect(addition.add(4, -5)).to.be.eql(-1);
  });
  it(`should throw exception`, function() {
    let callWithError = ()=> addition.add('a','b');
    expect(spy).to.be.a.spy;
    expect(callWithError).to.throw(`you can entre only numbers`);
  });
});
