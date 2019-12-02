// FS allows you to read a file from the file system
const fs = require('fs');
// You'll create an input.txt file in your folder for each day, then save the input for that day
// within that file.
const ENCODING = {encoding: 'utf8'};
// if you made the filename something besides input.txt, then change that here
const INPUTFILE = __dirname + '/input.txt';

// a function to read the file and return an array with the values.
const parseInput = () => {
  return fs.readFileSync(INPUTFILE, ENCODING).split('\n') || [];
};

// now we can get to the function!
const doPuzzle = () => {
  const inputs = parseInput();
  return inputs[0];
};

console.log('Part two', doPuzzle());
