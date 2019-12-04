// FS allows you to read a file from the file system
const fs = require('fs');
// You'll create an input.txt file in your folder for each day, then save the input for that day
// within that file.
const ENCODING = {encoding: 'utf8'};
// if you made the filename something besides input.txt, then change that here
const INPUTFILE = __dirname + '/input.txt';

// a function to read the file and return an array with the values.
const parseInput = () => {
  return fs.readFileSync(INPUTFILE, ENCODING).split(',').map(x => parseInt(x.trim())) || [];
};

// now we can get to the function!
const doPuzzle = (override) => {
  const inputs = parseInput();
  let stepper = 0;
  if (override.length) {
    inputs[1] = override[0];
    inputs[2] = override[1];
  }
  while (stepper < inputs.length) {
    const opCode = inputs[stepper];
    if (opCode === 99) {
      break;
    }
    console.log(`Line: ${opCode}, ${inputs[stepper + 1]}, ${inputs[stepper + 2]}, ${inputs[stepper + 3]}`);
    const num1 = inputs[inputs[stepper + 1]];
    const num2 = inputs[inputs[stepper + 2]];
    const writePosition = inputs[stepper + 3];

    if (opCode === 1) {
      inputs[writePosition] = num1 + num2;
    } else {
      inputs[writePosition] = num1 * num2;
    }
    stepper = stepper + 4;
  }
  return inputs[0];
};

console.log('Part one', doPuzzle([12,02]));
