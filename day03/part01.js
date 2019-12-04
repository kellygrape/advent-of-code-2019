const fs = require('fs');
const ENCODING = {encoding: 'utf8'};
const INPUTFILE = __dirname + '/input.txt';

// a function to read the file and return an array with the values.
const parseInput = () => {
  const wires = [];
  fs.readFileSync(INPUTFILE, ENCODING).split(/\r?\n/).forEach((line) => {
    const wire = [];
    line.split(/,/).forEach((coordset) => {
      wire.push(coordset);
    });
    wires.push(wire);
  });
  return wires;
};

const makeCoordinateSet = (wire) => {
  const positions = new Set();
  const position = { x: 0, y: 0 };

  for (let i = 0; i < wire.length; i++) {
    const direction = wire[i].substring(0, 1);
    const distance = Number(wire[i].substring(1, wire[i].length));
    for (let step = 1; step <= distance; step++) {
      switch (direction) {
        case 'L':
          position.x = position.x - 1;
          break;
        case 'R':
          position.x = position.x + 1;
          break;
        case 'U':
          position.y = position.y - 1;
          break;
        case 'D':
          position.y = position.y + 1;
          break;
      }
      positions.add(`${position.x},${position.y}`);
    }
  }
  return positions;
};
// now we can get to the function!
const doPuzzle = () => {
  const wires = parseInput();

  const wire1set = makeCoordinateSet(wires[0]);
  const wire2set = makeCoordinateSet(wires[1]);

  const crossedSet = new Set([...wire1set].filter(coordPair => wire2set.has(coordPair)));
  let distance = [];
  Array.from(crossedSet).forEach(coord => {
    const [x, y] = coord.split(',');
    const manhattanDistance = Math.abs(x) + Math.abs(y);
    distance.push(manhattanDistance);
  });

  return Math.min(...distance);
};


console.log('Part one', doPuzzle());
