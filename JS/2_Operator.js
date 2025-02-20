//arithmatic operators
let sum = 5 + 3; // Addition
let diff = 10 - 2; // Subtraction
let p = 4 * 2; // Multiplication
let q = 8 / 2; // Division
let r = 4 % 3; // Modulus
console.log(sum, diff, p, q, r);

//assigned operators
let n = 10;
n += 5;
n -= 3;
n *= 2;
n /= 2;
n %= 5;
console.log(n);

//comparison operators
console.log(10 > 5);
console.log(10 === "10");

//logical operators
let a = true;
let b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR

//bitwise operators
let res1 = 5 & 1; // Bitwise AND
let res2 = 5 | 1; // Bitwise or
console.log(res1, res2);

//ternary operator
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

//unary operators
let x = 5;
console.log(++x); // Pre-increment
console.log(x++); // post-increment(Output: 6, then x becomes 7)
console.log(--x); // Pre-decrement
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)

//string operator
const s = "Hello" + " " + "World";
console.log(s);
