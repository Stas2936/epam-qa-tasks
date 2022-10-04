/* eslint-disable require-jsdoc */
class Calculator {
  add(arg1, arg2) {
    this.checkTypeArguments(arg1, arg2);
    return arg1 + arg2;
  }
  multiply(arg1, arg2) {
    this.checkTypeArguments(arg1, arg2);
    return arg1 * arg2;
  }
  checkTypeArguments(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error('you can entre only numbers');
    }
  }
}
module.exports = Calculator;
