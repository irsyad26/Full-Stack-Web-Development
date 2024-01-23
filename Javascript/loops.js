/* Iterate Through an Array with a For Loop: */

var iterateLoop = [2, 3, 4, 5];
var anyTotal = 0;

for (var i = 0; i < iterateLoop.length; i++) {
  anyTotal += iterateLoop[i];
}
console.log(anyTotal);

/*With While Loop */

var i = 0;
while (i < iterateLoop.length) {
  anyTotal = anyTotal + iterateLoop[i];
  i++;
}
console.log(anyTotal);

/* Nesting For Loops: */

function multiplyingArray(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j]; // product *= arr[i][j]
    }
  }
  return product;
}
var product = multiplyingArray([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

/* Iterate with Do While Loops: Do-While loop will run atleast once before it checks the condition.*/

var someArray = [];
var i = 10;

do {
  someArray.push(i);
  i++;
} while (i < 5);
console.log(i, someArray);

/* Profile Look Up: */

var contact = [
  {
    fname: "Akira",
    lname: "Nandhan",
    phone: "714-237-9260",
    likes: ["Pie", "Decoding", "Brownie"],
  },
  {
    fname: "Sherlock",
    lname: "Holmes",
    phone: "123-456-7890",
    likes: ["Shake", "Mathing", "Cookies"],
  },
  {
    fname: "Harry",
    lname: "Potter",
    phone: "989-908-007",
    likes: ["Magic", "Hagrid", "Hogwarts"],
  },
  {
    fname: "Justin",
    lname: "Beiber",
    phone: "2098967860",
    likes: ["Apple Pie", "Statinstine", "Oreo"],
  },
];

function lookUprofile(name, prop) {
  for (var i = 0; i < contact.length; i++) {
    if (contact[i].fname === name) {
      return contact[i][prop] || "No Such Property";
    }
  }
  return "No Such Contact";
}
var data = lookUprofile("Harry", "lname");
console.log(data);

/* Generate Random Fractions: Math.random() random number generators. */

function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

/* Generate Random Whole Numbers: Math.floor() sums up to the nearest whole neumber */

var randomNumbersBetween0and21 = Math.floor(Math.random() * 20);
console.log(randomNumbersBetween0and21);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

/* Generate A Random Whole Numbers within a Range. */

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);

/* Use the parseInt Function: This converts strings to integers. */

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("123"));

/* Use the parseInt Function with a Radix: Radix specifies the base of the number in the string. */

function convertToInteg(num) {
  return parseInt(num, 2);
}
console.log(convertToInteg("10011")); //Now the computer knows it as a binary number.

/* Use the Conditional (Terinary) Operator: This is like a one-line if-else operator.

Condition ? statement-if-true : statement-if-false; */
function checkIfEqual(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIfEqual(2, "2"));

// Above one can also be written as:
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(3, 3.0));

/* Multiple Conditional Operators:
condition 1 ? Return Statement : condition 2 : Return statement : Else Condition. */
function checkingSign(integer) {
  return integer > 0 ? "Positive" : integer < 0 ? "Negative" : "Zero Bro";
}
console.log(checkingSign(1));

function checkingBigger(number) {
  return number > 3 ? "Bigger than 3" : number < 3 ? "Smaller than 3" : "";
}
console.log(checkingBigger(8));

const variables = (a, b) => {
  if (a > b) {
    return "a is greater than b";
  } else {
    return "b is greater than a";
  }
};
const result = variables(8, 9);
console.log(result);

var arrowFunction = (a, b, c) => {
  return a > b && a > c
    ? "a is the Big one here"
    : b > a && b > c
    ? "b is the big one here"
    : "Only c is big here";
};
const returnResult = arrowFunction(3, 4, 6);

console.log(returnResult);

var arrowOnlyFunction = (a, b, c) => {
  return (
    a > b && a > c
      ? "a is the Big one here"
      : b > a && b > c
      ? "b is the big one here"
      : "Only c is big here",
    alert("Why Bro!")
  );
};
const returningResult = arrowOnlyFunction(33, 45, 63);

console.log(returningResult);

function anythingBro(a, b, c, d) {
  return a > b && c > d
    ? "a and c are big than b and d"
    : a > c && b > d
    ? "a and b are big than c and d"
    : b > c && d > a
    ? "b and d are big than c and a"
    : "Not all the remaining cases.";
}
console.log(anythingBro(112, 234, 5, 667));

function anythingBro(a, b, c, d) {
  return a > b && c > d
    ? "a and c are big than b and d"
    : a > c && b > d
    ? "a and b are big than c and d"
    : b > c && d > a
    ? "b and d are big than c and a"
    : "Not all the remaining cases.";
}
console.log(anythingBro(102, 204, 504, 18));

/* Difference between var and let keywords: 
We can declare the same variable twice with var keyword but we cannot do it with let keyword. If we declare it to let it will give us duplicate declaration error. Because it says we can't create the same variable in the same scope. In order to have the let keyword and the same variable name to not get an error.*/
let dogName = "Snoopy";
var quotation;
dogName = "Tweety"; //here the last variable will be considered as the variable value.

function dogTalk() {
  "use strict";
  dogName = "Tweety";
  return (quotation = dogName + " Says Bow Bow!");
}
alert(dogTalk());
console.log(dogTalk());

/* Using strict will enable strict mode which capture conding errors and unsafe actions. Actions like creating variables and not declaring this can be used in top of the javascript file or else in the functions.*/

/* Var variable when created it's scope is global and local if defined in a function. When it comes to let keyword, However,let- the scope is limited to the block or statement that it was declared in.*/

function scopeViewing() {
  "use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("block scope i is: ", i);
  }
  console.log("function scope i is: ", i);
  return i;
}
console.log(scopeViewing());

function scopeView() {
  "use strict";
  let i = "function scope";
  /* if let keyword is declared and accessed in another block it throws an error. */
  if (true) {
    let i = "block scope";
    console.log("block scope i is: ", i);
  }
  console.log("function scope i is: ", i);
  return i;
}
console.log(scopeView());

/* Declaring a Read-Only Variable with the const keyword. It has all the features of let but it is read only. Const is another way to declare a variable. */

function printManyTimes(str) {
  "use strict";

  var sentence = str + " is cool!";
  sentence = str + " is amazing.";
  for (var i = 0; i < str.length; i++) {
    console.log(sentence);
  }
}
console.log(printManyTimes("Me completing JS fast"));

function printsomeTimes(str) {
  "use strict";

  const sentence = str + " is cool!";
  sentence = str + " is amazing."; //It will throw an error : 'Assignment to constant variable.'
  for (var i = 0; i < str.length; i++) {
    console.log(sentence);
  }
}
console.log(printsomeTimes("Me completing JS fast"));

function printsomeTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
console.log(printsomeTimes("If completing JS fast"));

/* Declaring with const you cannot reassign it afterwards. If we are about to use const we need to have all of them un capital letters. */

const VARIABLE = "any variable";
console.log(VARIABLE);

/* Mutating an array declared with const: We cannot reassign the variable but we can mutate the array.*/

const s = [5, 7, 2];
function editPlace() {
  "use strict";
  //s = [2,5,7] rearranging is not possible.
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editPlace();
console.log(s);

/* Preventing Object Mutation: using obj.freeze */

function someObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = someObj();
console.log(PI);
/* So, whenever we have an object and we don't want to any of the items in the object to change we need to use Object.frreze() method. */
function anyObj() {
  "use strict";
  const MATH_CONSTANT = {
    PIE: 3.145,
  };
  Object.freeze(MATH_CONSTANT);
  try {
    MATH_CONSTANT.PIE = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}
const PIE = anyObj();
console.log(PIE);

/* Using Arrow Functions to wrote concise Anonymous functions. */

var magic = function () {
  /* This is an anonymous function. And it doesnot have any name and will be added to the variable directly. And we can convert this into an arrow function. */
  return new Date();
};
console.log(magic());

var arrowFunctionBro = () => {
  return new Date();
};
console.log(arrowFunctionBro());

/* And we can further concise this into like this. */

var keyfunction = () => new Date();
console.log(keyfunction());
