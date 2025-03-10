// Upon arriving at an interview, you are presented with a solid blue cube.
// The cube is then dipped in red paint, coating the entire surface of the cube.
// The interviewer then proceeds to cut through the cube in all three dimensions
// a certain number of times.
//
// Your function takes as parameter the number of times the cube has been cut.
// You must return the number of smaller cubes created by
// the cuts that have at least one red face.
//
// To make it clearer, the picture below represents the cube after
// from left to right) 0, 1 and 2 cuts have been made.

export function countSquares(cuts: number): number {
    return (cuts==0) ? 1 : 2*	Math.pow(cuts+1,2)+(cuts-1)*4*cuts
}


console.log(countSquares(2));
console.log(countSquares(3)); // 64 - 2^3
console.log(countSquares(4));
console.log(countSquares(5));


