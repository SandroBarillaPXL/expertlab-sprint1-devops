// load Unit.js module and addnumbers function
import test from 'unit.js';
import { addNumbers, divNumbers, mulNumbers, subNumbers } from '../scripts/functions.js';

// assert that functions return the correct value
if (test.value(addNumbers(1, 2)).is(3)) {
    console.log('Addition test passed');
} else {
    console.log('Addition test failed');
};

if (test.value(addNumbers(1, 2)).isNot(4)) {
    console.log('False addition test passed');
} else {
    console.log('False addition test failed');
}

if (test.value(subNumbers(2, 1)).is(1)) {
    console.log('Subtraction test passed');
} else {
    console.log('Subtraction test failed');
}

if (test.value(subNumbers(2, 1)).isNot(2)) {
    console.log('False subtraction test passed');
} else {
    console.log('False subtraction test failed');
}

if (test.value(mulNumbers(2, 3)).is(6)) {
    console.log('Multiplication test passed');
} else {
    console.log('Multiplication test failed');
}

if (test.value(mulNumbers(2, 3)).isNot(5)) {
    console.log('False multiplication test passed');
} else {
    console.log('False multiplication test failed');
}

if (test.value(divNumbers(6, 3)).is(2)) {
    console.log('Division test passed');
}   else {
    console.log('Division test failed');
}

if (test.value(divNumbers(6, 3)).isNot(3)) {
    console.log('False division test passed');
} else {
    console.log('False division test failed');
}