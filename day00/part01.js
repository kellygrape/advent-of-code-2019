// FS allows you to read a file from the file system
const fs = require('fs');
// You'll create an input.txt file in your folder for each day, then save the input for that day
// within that file.
const ENCODING = {encoding: 'utf8'};
// if you made the filename something besides input.txt, then change that here
const INPUTFILE = __dirname + '/input.txt';

// a function to read the file and return an array with the values.
const parseInput = () => {
  return fs.readFileSync(INPUTFILE, ENCODING).split('\n').parseInt() || [];
};

// now we can get to the function!
const doPuzzle = () => {
  // get the inputs for the day.  This will be an array of the input values.
  const inputs = parseInput();
  // do any work you need on the inputs (in this case, we are summing them), then return your answer.
  return inputs.reduce((a,b) => a + b, 0);
};

console.log('Part one', doPuzzle());
