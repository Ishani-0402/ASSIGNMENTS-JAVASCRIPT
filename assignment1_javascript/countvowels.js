function countVowels(inputString) {
    // Convert the input string to lowercase to make it case-insensitive
    inputString = inputString.toLowerCase();

    // Initialize a variable to store the vowel count
    let vowelCount = 0;

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Loop through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(inputString[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);
console.log(`Number of vowels: ${numberOfVowels}`);
