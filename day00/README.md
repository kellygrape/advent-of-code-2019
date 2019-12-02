# Day 00: Setup

This will give you an example setup to be used for Advent of Code.

Each day will be split into its own folder (`dayXX`), with two js files for each part of the puzzle for that day
(`part01.js` and `part02.js`).

You should copy and paste the input for each puzzle into the file `input.txt`.  The current setup assumes that the
input will be a list of items.  There is a helper function that will split the
input file at each newline and will return an array of the inputs.

Not all inputs will work nicely with this setup, so you may need to make changes to that parser for some puzzles.

## To Solve a Puzzle and Get the Answer

Write your code within the file for each part.  You can use the `doPuzzle` function to write your code.

To get the answer for each puzzle, `cd` into the directory for each day, and run `node partXX.js`.  The console log
at the end of the will display whatever has been returned from that `doPuzzle` function.

## I have a better way to do this / What about tests?

I'm still learning!  If you have some thoughts about a better setup, or even ways to make THESE instructions more clear,
please reach out!  Sometimes the hardest part of being involved in a coding challenge like this is just getting set up -
so I tried to approach this in a beginner friendly way.  As I learn more, I will improve this setup!

I definitely want to implement testing, and provide some instructions on how to utilize those tests.
