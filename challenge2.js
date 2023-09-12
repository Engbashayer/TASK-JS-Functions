/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
  // Your code here
}
greet("Bebe");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // if (n % 2 == 0) {
  //   return false;
  // } else {
  //   return true;
  // }

  return n % 2;
}
console.log(isOdd(7));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  // let count = 0;
  // for (let i = 1; i < n; i += 2) {
  //   count++;
  // }
  // return count;

  //7/2 = 3.5 and then turn it to int

  return parseInt(n / 2);
}

console.log(oddsSmallerThan(15));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  }

  return n * 2;

  // Your code here
}
