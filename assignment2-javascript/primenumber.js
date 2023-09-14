function isPrime(number) {
    if (number <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
  
    if (number <= 3) {
      return true; // 2 and 3 are prime numbers
    }
  
    // Check for divisibility by all possible divisors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // The number is divisible by i, so it's not prime
      }
    }
  
    return true; // If no divisor was found, the number is prime
  }
  
  // Example usage:
  const number = 17; // Change this to the number you want to check
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  