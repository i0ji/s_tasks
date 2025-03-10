// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// Strings

function countLettersAndDigits(input: string): number {
  return input.replace(/[^a-zA-Z0-9]/gi, '').length;
}

console.log();
