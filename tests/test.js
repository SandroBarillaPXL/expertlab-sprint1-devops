// load Unit.js module and addnumbers function
import test from 'unit.js';
import { addNumbers } from '../scripts/functions.js';

// assert that functions return the correct value
if (test.value(addNumbers(1, 2)).is(3)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
};