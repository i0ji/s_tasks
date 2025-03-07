// function findUniqueElement(arr: Array<number>): number | null {
//   let elementCount: { [key: number]: number } = {};
//   for (let num of arr) {
//     if (elementCount[num]) {
//       elementCount[num]++;
//     } else {
//       elementCount[num] = 1;
//     }
//   }

//   console.log(elementCount);

//   for (let key in elementCount) {
//     if (elementCount[key] === 1) {
//       return Number(key);
//     }
//   }
//   return null;
// }

// console.log(findUniqueElement([1, 2, 3, 4, 1, 4, 2, 3]));

// function findUniqueElementXOR(arr: Array<number>): number {
//   let uniqueElement = 0;

//   for (let num of arr) {
//     uniqueElement ^= num;
//   }
//   return uniqueElement;
// }

// console.log(findUniqueElementXOR([0, 3, 1, 2, 3, 4, 1, 2, 3]));

function findUniqueElement(arr: number[]): number | null {
  const elementCount = new Map<number, number>();

  for (const num of arr) {
    if (elementCount.has(num)) {
      elementCount.set(num, elementCount.get(num)! + 1);
    } else {
      elementCount.set(num, 1);
    }
  }

  for (const [key, value] of elementCount.entries()) {
    if (value === 1) {
      console.log(elementCount.entries)
      return key;
    }
  }
  return null;
}

// Пример использования
const arr = [1, 2, 2, 3, 3, 4, 1];
const uniqueElement = findUniqueElement(arr);
console.log(uniqueElement); // Output: 1
