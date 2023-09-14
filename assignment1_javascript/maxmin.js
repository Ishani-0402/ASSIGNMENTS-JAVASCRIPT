function findMaxMin(arr) {
    if (arr.length === 0) {
        // Handle the case of an empty array
        return { max: undefined, min: undefined };
    }

    let max = arr[0];
    let min = arr[0];

    // Iterate through the array to find the maximum and minimum values
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

// Example usage:
const numbers = [1, 3, 5, 2, 8, 4];
const result = findMaxMin(numbers);
console.log(`Maximum value: ${result.max}`);
console.log(`Minimum value: ${result.min}`);
