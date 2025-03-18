let a = 10;
let b = 20;

//if statement-
// syntax-
// if(condition){
//     statement1;
// }
if (a < b) {
  console.log("a is smaller");
}

//if-else statement-
//syntax
// if (condition)
//     {
//         // Executes this block if
//         // condition is true
//     }
//     else
//     {
//         // Executes this block if
//         // condition is false
//     }
if (a > b) {
  console.log("a is bigger");
} else {
  console.log("a is smaller");
}

//if-elseif statement
//syntax
// if (condition)
// statement;
// else if (condition)
//     statement;
// .
// .
// else
//     statement;
if (a == b) {
  console.log("a and b is equal");
} else if (a > b) {
  console.log("a is bigger");
} else {
  console.log("a is smaller");
}

//nested if-else-
//syntax
// if (condition1)
//     {
//        Executes when condition1 is true
//        if (condition2)
//        {
//           Executes when condition2 is true
//        }
// }
if (a > 5) {
  if (a > b) {
    console.log("a is bigger");
  } else {
    console.log("a is smaller");
  }
}

//switch case
let day = 5;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

//continue case
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
