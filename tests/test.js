// load Unit.js module
import test from 'unit.js';
import { addNumbers } from '../scripts/script.js';

// Import the function to be tested


// just for example of tested value
var test_value = addNumbers(1, 2);

// assert that example variable is a string
if (test.value(test_value).is(3)) {
    console.log('Test passed');
} else {
    console.log('Test failed');
};