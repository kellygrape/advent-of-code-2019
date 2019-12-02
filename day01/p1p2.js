const { CARGO } = require('./input');

let partOne = 0;
let partTwo = 0;

const calcFuel = (cargo) => {
  const fuel = (Math.floor(cargo / 3) - 2);
  return fuel > 0 ? fuel : 0;
};

CARGO.forEach((cargo) => {
  let feulNeeded = calcFuel(cargo);
  partOne = partOne + feulNeeded;
  partTwo = partTwo + feulNeeded;
  while (feulNeeded > 0) {
    let feulFeulNeeded = calcFuel(feulNeeded);
    partTwo = partTwo + feulFeulNeeded;
    feulNeeded = feulFeulNeeded;
  };
});


console.log('Part one', partOne);
console.log('Part two', partTwo);
