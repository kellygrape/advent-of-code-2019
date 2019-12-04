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
const doPuzzle = () => {
  const inputs = parseInput();
  const DESIREDOUTPUT = 19690720;

  let answer;
  let foundAnswer = false;
  for(let i = 0; i <= 99 && !foundAnswer; i++) {
    for(let j = 0; j <= 99; j++) {
      // clone the array
      const program = inputs.slice(0);

      // do the overrides
      program[1] = i;
      program[2] = j;

      let stepper = 0;
      while (stepper < program.length) {
        const opCode = program[stepper];
        if (opCode === 99) {
          break;
        }
        const num1 = program[program[stepper + 1]];
        const num2 = program[program[stepper + 2]];
        const writePosition = program[stepper + 3];

        if (opCode === 1) {
          program[writePosition] = num1 + num2;
        } else {
          program[writePosition] = num1 * num2;
        }
        stepper = stepper + 4;
      }

      // by now the answer should be at program[0];

      console.log(`i was ${i} and j was ${j} and the output was ${program[0]}`);
      if (program[0] === DESIREDOUTPUT) {
        answer = (100*i) + j;
        foundAnswer = true;
        break;
      }

    }
  }

  return answer;
};

console.log('Part two', doPuzzle());
