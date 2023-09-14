function reverseString(inputString) {
    // Use the split(), reverse(), and join() methods to reverse the string
    return inputString.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
