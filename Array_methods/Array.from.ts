//Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

let data = [1, 2, 3, 4];

let string = 'abc'

const arrayMethod = {
  data: data,
  from: function <T>(arr: Array<T>, mapFn?: () => void, thisArg?: T): Array<T> {
    return arr;
  }
};

console.log(arrayMethod.from(data));
console.log(arrayMethod.from(string));
