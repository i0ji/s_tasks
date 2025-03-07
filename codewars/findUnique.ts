// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
//     The tests contain some very huge arrays, so think about performance.
//
//     This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr: number[]): any {
    let sorted = arr.sort((a, b) => a - b)
    let neededElem: number
    (sorted[0] === sorted[1]) ? neededElem = sorted[sorted.length - 1] : neededElem = sorted[0]
    return neededElem
}

let testArr = [1, 1, 1, 2, 1, 1]

console.log(findUniq([1, 1, 1, 2, 1, 1]))

