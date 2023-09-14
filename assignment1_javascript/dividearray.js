function divideArray(originalArray, chunkSize) {
    const dividedArrays = [];
    let index = 0;

    while (index < originalArray.length) {
        // Slice the original array to create a chunk
        const chunk = originalArray.slice(index, index + chunkSize);
        dividedArrays.push(chunk);

        // Move the index to the start of the next chunk
        index += chunkSize;
    }

    return dividedArrays;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const dividedArrays = divideArray(originalArray, chunkSize);
console.log(dividedArrays);
