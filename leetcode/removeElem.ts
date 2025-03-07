// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElement(nums: number[], val: number): number {
  let counter = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == val) counter++;
  }

  console.log('кол-во вхождений: ', counter);

  for (let j = 0; j < counter; j++) {
    nums.splice(
      nums.findIndex((elem) => elem == val),
      1
    );
  }

  console.log('массив после удаления: ', nums);

  return nums.length;
}

// console.log(removeElement([0, 1, 3, 2, 3, 4, 1, 3, 3,], 3))
removeElement([0, 1, 3, 2, 3, 4, 1, 3, 3], 3);

// removeElement([3, 2, 2, 3], 3)
// console.log(removeElement([3, 2, 2, 3], 3))
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
