function findLongestString(strings) {
    if (strings.length === 0) {
      return null; // Handle the case when the input array is empty
    }
  
    let longest = strings[0]; // Initialize the longest variable with the first string
  
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i]; // Update longest if a longer string is found
      }
    }
  
    return longest;
  }
  
  // Example usage:
  const stringArray = ["apple", "banana", "cherry", "date", "fig"];
  const longestString = findLongestString(stringArray);
  console.log("Longest string:", longestString);
  