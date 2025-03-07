function validMountainArray(arr: number[]): boolean | string {
    if (arr.length < 3) return false;

    let i = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i] }
        else { if (arr[i] != 0 && arr[i] == max) return 'first condition' }
    };

    let maxIndex = arr.indexOf(max);


    console.log(max, maxIndex)

    for (let j = 0; j < maxIndex; j++) {
        if (arr[j] > arr[j + 1])
            return 'second condition';
    }

    for (let j = maxIndex; j < arr.length; j++) {
        if (arr[j] < arr[j + 1])
            return 'third condition';
    }


    if (maxIndex == arr.length - 1) return 'first condition';
    if (maxIndex == arr[0]) return 'first condition';

    return true;

}

// console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
console.log(validMountainArray([1, 3, 2]))
// console.log(validMountainArray([0, 3, 2, 1]))
// console.log(validMountainArray([1, 2, 3, 4, 5]))
// console.log(validMountainArray([1, 2, 5, 5, 2]))
// console.log(validMountainArray([5, 4, 3, 2, 1]))
// console.log(validMountainArray([1, 4, 3, 2, 1]))

// validMountainArray([1, 2, 3, 4, 5])
// validMountainArray([1, 2, 3, 4, 5, 3])
// validMountainArray([1, 2, 5, 5, 2])
// validMountainArray([5, 4, 3, 2, 1])
// validMountainArray([1, 4, 3, 2, 1])