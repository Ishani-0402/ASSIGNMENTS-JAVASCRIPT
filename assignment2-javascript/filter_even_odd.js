function filterArrayByCondition(numbers, condition) {
    const filteredArray = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (condition(numbers[i])) {
        filteredArray.push(numbers[i]);
      }
    }
  
    return filteredArray;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const evenNumbers = filterArrayByCondition(numbers, (number) => number % 2 === 0);
  const oddNumbers = filterArrayByCondition(numbers, (number) => number % 2 !== 0);
  
  console.log("Even numbers:", evenNumbers);
  console.log("Odd numbers:", oddNumbers);
  