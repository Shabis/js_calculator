(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Calculator = require('../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#addition-form').submit(function(event) {
    event.preventDefault();
    var n1 = parseInt($('#firstnumber').val());
    var n2 = parseInt($('#secondnumber').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(n1, n2);
     $('#solution').append("<li>" + output + "</li>");
    });

  $('#subtraction-form').submit(function(event) {
    event.preventDefault();
    var n3 = parseInt($('#subtractfirstnumber').val());
    var n4 = parseInt($('#subtractsecondnumber').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(n3, n4);
     $('#solution').append("<li>" + output + "</li>");
    });

  $('#multiplication-form').submit(function(event) {
    event.preventDefault();
    var n5 = parseInt($('#multiplyfirstnumber').val());
    var n6 = parseInt($('#multiplysecondnumber').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(n5, n6);
     $('#solution').append("<li>" + output + "</li>");
    });

  $('#division-form').submit(function(event) {
    event.preventDefault();
    var n7 = parseInt($('#dividefirstnumber').val());
    var n8 = parseInt($('#dividesecondnumber').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.divide(n7, n8);
     $('#solution').append("<li>" + output + "</li>");
    });
  });

},{"../js/calculator.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
