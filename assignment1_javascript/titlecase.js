function toTitleCase(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Capitalize the first letter and convert the rest to lowercase
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    // Join the words back into a sentence
    const titleCaseSentence = words.join(' ');

    return titleCaseSentence;
}

// Example usage:
const inputSentence = "this is a sample sentence";
const titleCaseResult = toTitleCase(inputSentence);
console.log(titleCaseResult); // Output: "This Is A Sample Sentence"
