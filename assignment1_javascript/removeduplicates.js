function removeDuplicates(arr) {
    // Create a Set to store unique elements
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(`Array with duplicates removed: ${uniqueNumbers}`);
