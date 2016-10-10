function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(n1, n2) {
  var output = (n1 + n2);
  return output;
};

Calculator.prototype.subtract = function(n1, n2) {
  var output = (n1 - n2);
  return output;
};


Calculator.prototype.multiply = function(n1, n2) {
  var output = (n1 * n2);
  return output;
};


Calculator.prototype.divide = function(n1, n2) {
  var output = (n1 / n2);
  return output;
};


exports.calculatorModule = Calculator;
