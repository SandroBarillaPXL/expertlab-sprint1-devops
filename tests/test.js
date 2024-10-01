// load Unit.js module and addnumbers function
import test from 'unit.js';
import { addNumbers, divNumbers, mulNumbers, subNumbers } from '../scripts/functions.js';

// assert that functions return the correct value
if (test.value(addNumbers(1, 2)).is(3)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
};

if (test.value(addNumbers(1, 2)).isNot(4)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (test.value(subNumbers(2, 1)).is(1)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (test.value(subNumbers(2, 1)).isNot(2)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (test.value(mulNumbers(2, 3)).is(6)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (test.value(mulNumbers(2, 3)).isNot(5)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (test.value(divNumbers(6, 3)).is(2)) {
    console.log('Test passed');
}   else {
    console.log('Test failed');
}

if (test.value(divNumbers(6, 3)).isNot(3)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
}