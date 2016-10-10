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
