// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2
// with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
  let z = [];
  for (i = 0; i <= n; i++) {
    z.push(2 ** i);
  }
  return z;
}
console.log(powersOfTwo(2));
