// Array of numbers we want to check
const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Diesel price
const dieselPrice = 196.63;

// Function to check if a number is prime
function isPrime(num) {
  // numbers less than 2 are not prime numbers
  if (num < 2) {
    return false;
  }

  // loop to check if numbers has divisors
  for (let i = 2; i < num; i++) {
    //if divisible by any number other than one and itself
    if (num % i === 0) {
      return false; //not a prime number
    }
  }
  // if no divisors found, it is a prime number
  return true;
}

//loop through each number in the array
for (let i = 0; i < number.length; i++) {
  // get current number from array
  let currentNumber = number[i];

  // check if number is prime
  if (isPrime(currentNumber)) {
    // if prime, print the number
    console.log(currentNumber + "is prime");
  } else {
    // if not prime, print diesel price
    console.log(
      currentNumber +
        "is NOT Prime  Diesel price in kenya is KES" +
        dieselPrice,
    );
  }
}
