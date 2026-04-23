const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const dieselPrice = 196.63;

// Function to check if a number is prime
function isPrime(num) {

if (num < 2) return false;

for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
}

return true;gi
}

// Loop through array
for (let i = 0; i < numbers.length; i++) {

let currentNumber = numbers[i];

// If prime → print number only
if (isPrime(currentNumber)) {
    console.log(currentNumber);

// If NOT prime → print diesel price only
} else {
    console.log(dieselPrice);
}
}

