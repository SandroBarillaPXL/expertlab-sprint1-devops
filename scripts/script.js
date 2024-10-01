'use strict';
import { addNumbers, subNumbers, mulNumbers, divNumbers } from '../scripts/functions.js';

var addButton = document.getElementById('addButton');
var subButton = document.getElementById('subButton');
var mulButton = document.getElementById('mulButton');
var divButton = document.getElementById('divButton');
var firstNumber = document.getElementById('num1');
var secondNumber = document.getElementById('num2');
var result = document.getElementById('result');

addButton.addEventListener('click', function() {
    event.preventDefault(); // prevents refresh
    var sum = addNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    result.innerHTML = sum;
});

subButton.addEventListener('click', function() {
    event.preventDefault(); // prevents refresh
    var sum = subNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    result.innerHTML = sum;
});

mulButton.addEventListener('click', function() {
    event.preventDefault(); // prevents refresh
    var sum = mulNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    result.innerHTML = sum;
});

divButton.addEventListener('click', function() {
    event.preventDefault(); // prevents refresh
    var sum = divNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    result.innerHTML = sum;
});