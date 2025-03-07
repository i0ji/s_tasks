const anagram = (word1: string, word2: string): boolean => {
    const firstWordSet = JSON.stringify([...new Set(word1)].sort());
    const secondWordSet = JSON.stringify([...new Set(word2)].sort());

    // console.log(firstWordSet)
    // console.log(secondWordSet)

    // console.log(word1.length);
    // console.log(word2.length);
    // console.log('length: ', word2.length == word1.length);
    // console.log('sets: ', firstWordSet === secondWordSet);

    return (
        word1.length === word2.length && firstWordSet === secondWordSet
    );
};

console.log(anagram('rescue', 'secure'));
console.log(anagram('friend', 'findexr'));
