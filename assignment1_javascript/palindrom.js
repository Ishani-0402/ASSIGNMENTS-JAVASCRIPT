function isPalindrome(inputString) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare characters from the start and end inward
    let left = 0;
    let right = cleanString.length - 1;

    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If the loop completes without finding a mismatch, it's a palindrome
}

// Example usage:
const testString1 = "racecar";
const testString2 = "hello";

console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`);
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`);

