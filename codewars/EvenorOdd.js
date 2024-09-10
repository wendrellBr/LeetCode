// Create a function that takes an integer as an argument and returns
// Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  let calc = number % 2 === 0;
  return calc ? "Even" : "Odd";
}
