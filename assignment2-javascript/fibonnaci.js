function generateFibonacci(n) {
    const fibonacciSequence = [];
  
    if (n >= 1) {
      fibonacciSequence.push(0); // Add the first Fibonacci number (0)
  
      if (n >= 2) {
        fibonacciSequence.push(1); // Add the second Fibonacci number (1)
  
        for (let i = 2; i < n; i++) {
          const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
          fibonacciSequence.push(nextFibonacci);
        }
      }
    }
  
    return fibonacciSequence;
  }
  
  const n = 10; // Change this value to the desired number of Fibonacci numbers
  const fibonacciNumbers = generateFibonacci(n);
  
  console.log(`First ${n} numbers in the Fibonacci sequence: ${fibonacciNumbers.join(', ')}`);
  