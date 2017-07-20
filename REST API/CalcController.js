'use strict';

var CalcController = {};

CalcController.add = function(num1, num2, operation) {
    var result = operation == '+' ? num1 + num2 : num1 - num2;
    return result;
};

CalcController.divide = function(num1, num2) {
    var result = num1 / num2;
    return result;
};

CalcController.multiply = function(num1, num2) {
    var result = num1 * num2;
    return result;
};

CalcController.compute = function(num1, num2, operation) {
    var result = num1;
    switch(operation) {
        case '+':
        case '-':
            result = CalcController.add(num1, num2, operation);
            break;
        case '/':
            result = CalcController.divide(num1, num2);
            break;
        case 'x':
            result = CalcController.multiply(num1, num2);
            break;
    }
    return result;
};


module.exports = CalcController;