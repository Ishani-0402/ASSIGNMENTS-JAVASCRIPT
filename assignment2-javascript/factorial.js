function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  const number = 5;
  const result = factorialIterative(number);
  console.log(`The factorial of ${number} is ${result}`);
  