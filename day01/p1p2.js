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
const doPuzzle = (part) => {
  let partOne = 0;
  let partTwo = 0;

  const inputs = parseInput();

  inputs.forEach((input) => {
    let feulNeeded = calcFuel(input);
    partOne = partOne + feulNeeded;

    // this is the calculation for part two
    partTwo = partTwo + feulNeeded;
    while (feulNeeded > 0) {
      let feulFeulNeeded = calcFuel(feulNeeded);
      partTwo = partTwo + feulFeulNeeded;
      feulNeeded = feulFeulNeeded;
    }
  });

  return part === 1 ? partOne : partTwo;
};

const calcFuel = (cargo) => {
  const fuel = (Math.floor(cargo / 3) - 2);
  return fuel > 0 ? fuel : 0;
};





console.log('Part one', doPuzzle(1));
console.log('Part two', doPuzzle(2));
