'use strict';

export function addNumbers(a, b) {
    return a + b;
}

var addButton = document.getElementById('addButton');
var firstNumber = document.getElementById('num1');
var secondNumber = document.getElementById('num2');
var result = document.getElementById('result');

addButton.addEventListener('click', function() {
    event.preventDefault(); // prevents refresh
    var sum = addNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    result.innerHTML = sum;
});