// =======================
// TASK 7.1: VARIABLES
// =======================

// Variable declarations
let name = "Caleb Saiuni";
let age = 18;
const birthYear = 2008;

// typeof operator
console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

// let vs const
let score = 100;
score = 150;

const PI = 3.14159;

// Exercise: Variable Practice
let isStudent = true;
let favoriteColors = ["Black", "Blue", "Red"];
let todayDate = new Date();

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Student: " + isStudent);
console.log("Favorite Colors: " + favoriteColors);
console.log("Today's Date: " + todayDate);


// =======================
// TASK 7.2: OPERATORS
// =======================

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Increment/Decrement
let count = 0;
count++;
count--;

// String Operations
let firstName = "Caleb";
let lastName = "Saiuni";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Caleb"));

// Comparison & Logical
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge
console.log("Age in days:", age * 365);
console.log("Age in hours:", age * 365 * 24);
console.log("Year you turn 100:", birthYear + 100);


// =======================
// TASK 7.3: FUNCTIONS
// =======================

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Build functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function isEven(num) {
    return num % 2 === 0;
}

function getInitials(fullName) {
    return fullName.split(" ").map(n => n[0]).join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Default parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}


// =======================
// TASK 7.4: CONTROL FLOW
// =======================

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function getDayName(day) {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid";
    }
}

// Loops
for (let i = 1; i <= 100; i++) console.log(i);

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// FizzBuzz
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}


// =======================
// CALCULATOR PROJECT
// =======================

function subtract(a, b) {
    return a - b;
}

function divideCalc(a, b) {
    if (b === 0) return "Error: Division by zero";
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divideCalc(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));


// =======================
// TASK 8.1: ARRAYS
// =======================

const numbersArr = [1, 2, 3, 4, 5];

const doubled = numbersArr.map(n => n * 2);
const evens = numbersArr.filter(n => n % 2 === 0);
const firstBig = numbersArr.find(n => n > 2);
const sum = numbersArr.reduce((t, n) => t + n, 0);


// =======================
// TASK 8.2: OBJECTS
// =======================

const person = {
    firstName: "Caleb",
    lastName: "Saiuni",
    age: 16
};

person.email = "caleb@example.com";


// =======================
// TASK 8.3: ARRAY OF OBJECTS
// =======================

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const charlie = students.find(s => s.name === "Charlie");
const avgGrade = students.reduce((t, s) => t + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sorted = [...students].sort((a, b) => b.grade - a.grade);
const hasTop = students.some(s => s.grade > 90);
const allPass = students.every(s => s.grade >= 60);
