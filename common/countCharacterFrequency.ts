// function countCharacterFrequency(str: string) {
//   let charFrequency = {};
//   for (let char of str) {
//     charFrequency[char] = (charFrequency[char] || 0) + 1;
//   }
//   return charFrequency;
// }

interface IObj {
  [key: string]: number;
}

function countCharacterFrequency(str: string): IObj {
  let charFrequency: IObj = {};

  for (let letter of str) {
    if (charFrequency[letter]) {
      charFrequency[letter]++;
    } else {
      charFrequency[letter] = 1;
    }
  }

  // let countLetter = Object.values(charFrequency)

  // console.log(countLetter)
  // return countLetter.sort()[0];

  return charFrequency;
}

let str = 'xxxxzzzzzzzzabracadabra';
console.log(countCharacterFrequency(str));
