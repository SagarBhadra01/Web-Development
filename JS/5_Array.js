// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

// Creating and Initializing an array with values
let c = Array(10, 20, 30);
console.log(c);

// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"];
// Accessing Array Elements
console.log(d[0]);
console.log(d[1]);

// Creating an Array and Initializing with Values
let e = ["HTML", "CSS", "JS"];
console.log(e);
e[1] = "Bootstrap";
console.log(e);

// Creating an Array and Initializing with Values
let f = ["HTML", "CSS", "JS"];
console.log("Original Array: " + f);
// Removes and returns the last element
let lst = f.pop();
console.log("After Removing the last: " + f);
// Removes and returns the first element
let fst = f.shift();
console.log("After Removing the First: " + f);
// Removes 2 elements starting from index 1
f.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + f);
