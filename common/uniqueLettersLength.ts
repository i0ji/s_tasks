function longestSubstringWithoutRepeatingCharacters(s) {
  let charIndexMap = {}; // Хранит последний индекс каждого символа
  let maxLength = 0; // Максимальная длина подстроки
  let left = 0; // Левый указатель

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // Если символ уже встречался в текущем окне, перемещаем left
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= left
    ) {
      left = charIndexMap[currentChar] + 1;
    }

    // Обновляем последний индекс символа
    charIndexMap[currentChar] = right;

    // Обновляем максимальную длину
    maxLength = Math.max(maxLength, right - left + 1);
    console.log(charIndexMap);
  }

  return maxLength;
}

// Пример использования
const str = 'sdfkhjgufgsdyuif';
console.log(longestSubstringWithoutRepeatingCharacters(str));
