//The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.
var a1 = 3;

//The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.
let a2 = 4;

//The const keyword declares variables that cannot be reassigned. It’s block-scoped as well.
const a3 = 6;

//data types-
let n = 45; //number
let pi = 3.14; //decimal number
let s = "hello world"; //string
let bool = true; //boolean
let notAssigned; //undefine
let empty = null; //null
console.log(n, pi, s, bool, notAssigned, empty);

let obj = {
  name: "Amit",
  age: 25,
}; //object
console.log(obj);

let arr = ["red", "green", "blue"];
console.log(arr); //array
