/* eslint-disable require-jsdoc */
class Calculator {
  constructor() {}

  add(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error(`only numbers can be entered`);
    }
    return arg1 + arg2;
  }
  multiply(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error(`only numbers can be entered`);
    }
    return arg1 * arg2;
  }
}
module.exports = Calculator;
