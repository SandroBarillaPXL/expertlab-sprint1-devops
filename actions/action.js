const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Fetch the value of the inputs specified in action.yml
    const input1 = core.getInput('input1');
    console.log(`you passed ${input1} as input1. this one was required`);
    core.getInput('input2') ? console.log(`you passed ${core.getInput('input2')} as input2`) : console.log('input2 is optional and was not passed');
    
    // Release an output
    const msg = "i come from action.js!";
    core.setOutput("output1", msg);
  
  } catch (error) {
    // Handle errors and indicate failure
    core.setFailed(error.message);
  }