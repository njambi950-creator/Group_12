//Assignment 1
//To create a constant list of numbers that wont change
const numbers = [12, 45, 7, 22, 89, 34, 11, 6, 90, 53, 2, 17, 8];

//the numbers which will change
let evenNumbers = [];
let oddNumbers = [];

//create loop to sort through the even and odd numbers
for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];

  //Check if the numbers are even
  if (currentNumber % 2 === 0) {
    evenNumbers.push(currentNumber);
  } else {
    oddNumbers.push(currentNumber);
  }
}
//Display even numbers
console.log("Even Numbers:", evenNumbers);

//Display odd numbers
console.log("Odd Numbers:", oddNumbers);
