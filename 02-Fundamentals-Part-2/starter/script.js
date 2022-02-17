'use strict'; // activates strict mode, has to be the first statement!
// forbids certains things, gives visual errors in console.

// let hasDriversLicense = false;
// const passTest = true;

// // hasDriverLicense  stavfel, gav inga bug error help i consol, men med 'use strict'; så GAV DEN HJÄLP!
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // FÖRBJUDET, blir error med strict, då dem är reserved names
// // const interface = 'audio';
// // const private = 534;

// -------------- FUNCTIONS
// keep code DRY, dont repeat yourself

// doesnt return anything
// function logger() {
//     console.log("My name is Jonas");
// }

// // calling function logger / running
// logger();
// logger();

// // returns value
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// // calling fruitProcessor and saving value in a constant variable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 1));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ------------- FUNCTIONS DECLARATIONS VS EXPRESSIONS

// func declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// function expression
// const calcAge2 = function (birthYear) { // annonymous func
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// ----------------- Arrow FUNCTIONS
// SHORTER VERSION OF FUNCTION EXPRESSIONS, faster to WRITE

// // FUNC EXPRESSION        -- COMPARISON TO ARROW UNDER
// const calcAge2 = function (birthYear) { // annonymous func
//     return 2037 - birthYear;
// }

// // ARROW FUNCTION
// // sparas i calcAge3, parameter, expression, 1 liner functions, 1 parameter
// const calcAge3 = birthYear => 2037 - birthYear;
// // calling it as usual
// const age3 = calcAge3(1991);
// console.log(age3);

// // flera parametrar === PARANTES
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return ` ${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Alexander"));
// console.log(yearsUntilRetirement(2001, "Nattis"));

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// alert(sum(1, 2));



// --------------- FUNC CALLIN OTHER FUNCS -- DRY
// if slice frui in 3 pieces instead of 4 we change in 1 place only!

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// --------------------- Functions reviewing
// func expression

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear); // func calling func
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired! 🎈`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, "Alex"));
// console.log(yearsUntilRetirement(1950, "Bosse"));

// ----------- ARRAYS  -- big container , where we can put in variables
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // Array, with str values
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// Another way of creating an array with new Array function, brackets more used above!
// const yearss = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]); // <-- Michael, first element
// console.log(friends[2]);

// nr of elements in array
// console.log(friends.length); // nr of elements in array!

// // get the last element in array
// console.log(friends[friends.length - 1]); // 3-1 = friends[2], expression

// // Change Peter with another Friends Name, mutate
// // ABLE TO MUTATE EVEN THOUGH CONST NOT LET, because its allowed in Javascript, BUT WE CANNOT CHANGE THE WHOLE ARRAY friends = ['Bob', 'Alice']
// friends[2] = 'Jay';
// console.log(friends);

// // Mixed type of values, each position an expression, even arrays
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // ARRAY EXERCISE
// // Expression Function
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Array
// const years = [1990, 1967, 2002, 2010, 2018];

// // Calc age for some in the years Array
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]); // last one
// console.log(age1, age2, age3);

// // new array with results
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// --------------- Basic Array Operations (Methods)
// Javascript has built in functions to Arrays, methods..

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // Push - adds last to ARRAY
// friends.push("Jay"); // added Jay last to array, som append i python
// console.log(friends);

// // unshift - adds to the begining of the ARRAY
// friends.unshift("John"); // Added John first in array
// console.log(friends);

// // pop - Remove the last element of array
// const popped = friends.pop(); // Removed last element
// // we can logg the popped element
// console.log(popped + " Removed");
// console.log(friends);

// // shift removes the first element from Array
// friends.shift();
// console.log(friends);

// // Return the index in array of an element, if not find === -1
// console.log(friends.indexOf("Michael"));

// // Include -  Similar to indexOf but MORE MODERN
// // Will return True or False if found element, STRICT EQUALITY ===
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// // Exercise: Make an Array with 3-5 Friends--------------
// // 1. create a function to log the last element in list
// // 2. create a function to check if an element is in the list
// // 3. create a func to change name of one friend if exists
// //    Find index in the array, then use index to change name

// // 1.
// const lastFriendInArray = function (array) {
//     return `The last friend in your Array is: ${friends[friends.length - 1]}`;
// }
// console.log(lastFriendInArray(friends));

// 2.
// const checkIfNameIsInArray = function (name, array) {
//     return array.includes(name);
// }
// // console.log(checkIfNameIsInArray("Alex", friends));
// // console.log(checkIfNameIsInArray("Michael", friends));

// // 3.
// const changeNameIfExistsInArray = function (array, name, newName) {
//     if (checkIfNameIsInArray(name, array)) {
//         const indexOfName = array.indexOf(name);
//         array[indexOfName] = newName; // changing name
//         return `Changed ${name} to ${newName} at index ${array.indexOf(newName)} in the array 🎈`
//     }
//     return `Cant find ${name} in the array`
// }


// // EXPRESSION FUNCTION
// console.log(changeNameIfExistsInArray(friends, "Bob", "Alex"));
// console.log(changeNameIfExistsInArray(friends, "Michael", "Alex"));
// console.log(friends);

// ------------------------OBJECTS
// här är en array med saker

// const alexArray = [
//     "Alex",
//     "Brun",
//     2037 - 1991,
//     "Coder",
//     ["Michael", "Peter", "Steven"]
// ];
// console.log(alexArray);

// // här är ett OBJECT, CURLY BRACERS SOM DICT, KEY-VALUE PAIRS
// // varje object har properties, firstname,lastname osv.. som python
// // Finns flera sätt att skapa object, detta nedan är literal syntax
// const alex = {
//     firstName: "Alex",
//     lastName: "Brun",
//     age: 2037 - 1991,
//     job: "coder",
//     pets: ["Bubben", "Dexter", "Kexet"]
// };
// console.log(alex);
// console.log(alex.firstName);

// ---------------DOT VS. BRACKET NOTATION, OBJECTS
// const alex = {
//     firstName: "Alex",
//     lastName: "Brun",
//     age: 2037 - 1991,
//     job: "coder",
//     pets: ["Bubben", "Dexter", "Kexet"]
// };
// console.log(alex);

// // Dot notation..
// console.log(alex.age); // Logs age

// // Brackets insteasd of dot, inside brackets you can WRITE ANY EXPRESSION
// // nästan som dict i python
// console.log(alex['age']);

// // We can put any expression inside the brackets, BUT NOT WITH DOT NOTATION
// const nameKey = 'Name';
// console.log(alex['first' + nameKey]);
// console.log(alex['last' + nameKey]);

// // Bracket notation another example:
// const interestedIn = prompt("What do you want to know about Alex? Choose Between firstName, lastName, age, job and friends");

// // LEK
// if (alex[interestedIn]) { // om det finns, DVS TRUE, undefined är FALSE
//     console.log(alex[interestedIn]);
// } else {
//     console.log("Wrong request! Choose Between firstName, lastName, age, job and friends ")
// }

// // ADDING NEW PROPERTIES TO OBJECT
// alex.location = "Sweden"; // Dot
// alex["twitter"] = "@AlexBrown"; // Bracket
// console.log(alex);

// // Challenge "Alex has 3 pets, and his best pet is called Dexter"
// const sentence = `${alex.firstName} has ${alex.pets.length} pets, and his best pet is called ${alex.pets[1]}.`;
// console.log(sentence);

// ---------- OBJECT METHODS
// Ett property med en function i classen, METOD, dvs alex.calcAge()
// const alex = {
//     firstName: "Alex",
//     lastName: "Brun",
//     birthYear: 1991,
//     job: "coder",
//     pets: ["Bubben", "Dexter", "Kexet"],
//     hasDriversLicense: true,
//     // METODER dvs funktioner inom OBJEKT
//     calcAge: function () { // property: expression,
//         // Creating a new property in the object!
//         this.age = 2037 - this.birthYear;  // som class self.birthYear
//         return this.age;
//     },

//     getSummary: function () {  // this.property SAMT decide if / else, ternary operator
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
// };

// // the object
// console.log(alex);

// // dot
// console.log(alex.calcAge()); // <-- DRY

// // We need to calc age ONCE, else undefined, not initiated otherwise, this.age
// console.log(alex.age);


// console.log(alex.getSummary());

// // TERNARY OPERATOR TIPS
// // const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;


// ------------------- FOR LOOP ITERATION

// for ([initialization]; [condition]; [final-expression])
//    statement


// console.log("Lifting weights rep 1 🎈");
// console.log("Lifting weights rep 2 🎈");
// console.log("Lifting weights rep 3 🎈");
// console.log("Lifting weights rep 4 🎈");
// console.log("Lifting weights rep 5 🎈");

// let variable because its gonna be modifed later in the loop
// for loop keeps running while conditions is TRUE

// start   // condition (also end value) //counter
// for (let rep = 1; rep <= 10; rep++) {
//     // code to be repeated
//     console.log(`Lifting weights repetition ${rep} 🎈!`);
// }

// --------- LOOPING ARRAYS, BREAKING AND CONTINUING
// const alex = [
//     "Alex",
//     "Brun",
//     2037 - 1991,
//     "Coder",
//     ["Michael", "Peter", "Steven"],
//     true
// ];
// console.log(alex);

// const types = [];

// // For loop
// // counter, 0 based! start at 0 // sedan CONDITION: length list
// //Counter:  i = i + 1, i++
// for (let i = 0; i < alex.length; i++) {
//     // reading array
//     // listan jonas[i] <-- current iteration
//     console.log(alex[i], typeof alex[i]);

//     // filling types array // append [i] python
//     types.push(typeof alex[i]);
// }
// console.log(types);

// // another example loop
// const years = [1991, 2007, 1969, 2020];
// const ages = []; // loop through years and fill up ages in this array

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]); // 2037 - years[current Iteration NR]
// }
// console.log(ages);

// // CONTINUE AND BREAK STATEMENT
// // continue === to skip current iteration -->continue to next one
// // break === break out of the loop completely, exiting it

// // only log out the string types

// console.log("-----ONLY STRINGS-----")
// for (let i = 0; i < alex.length; i++) {
//     // if the type is not string, continue to next one
//     if (typeof alex[i] !== 'string') continue;
//     console.log(alex[i], typeof alex[i]); // logging so we can check
// }

// console.log("-----BREAK WITH NUMBER-----")
// // after a number is found, break loop
// for (let i = 0; i < alex.length; i++) {
//     if (typeof alex[i] === 'number') break;
//     console.log(alex[i], typeof alex[i]); // logging so we can check
// }

// ------------------------ Looping backwards and loops within loops

// for ([initialization]; [condition]; [final-expression])
//    statement


// // looping backwards
// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// // i = jonas array length - 1 pga startar 0, sedan condition, räkning
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, "=", jonas[i]);
// }

// // loop inside a loop 3 exercises + 5 reps per exercise, log it
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise} -----------`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Liftin Weights... Repetition ${rep} 🎈`);
//     }

// }

// ------- WHILE LOOP

// for ([initialization]; [condition]; [final-expression])
//    statement
// for (let rep = 1; rep <= 10; rep++) {
//     // code to be repeated
//     console.log(`Lifting weights repetition ${rep} 🎈!`);
// }

// console.log("--------WHILE LOOP UNDER-----------");

// // while loop same:
// let rep = 1;
// let kcal = 50
// while (rep <= 10) {
//     console.log(`Rep ${rep} 🎈🎈`)
//     console.log(`KCAL: ${kcal} 👍`)
//     rep++; // ökar med 1
//     kcal += 50; // kcal = kcal + 50
// }

// // get rid of decimal part === Math.trunc()

// // nuumber 0-5
// let dice = Math.trunc(Math.random() * 6) + 1; // random ger bara mellan 0.0 - 1.0 decimal
// console.log(dice);

// while (dice !== 6) {
//     // need to create another random number in the loop otherwise loop === INFINITE
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1; // reassign === NEW NUMBER
//     if (dice === 6) console.log("Loop ends, u hit a 6");
// }


// CODING CHALLENGE #4

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

const calcAverage = function (arr) {
    let sum = 0; // because sum will be updated as we loop array
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]
        sum += arr[i];
    }
    return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// for (let i = 0; i < alex.length; i++) {
// }

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i])); // current bill * 0.15 / 0.2
    totals.push(calcTip(bills[i]) + bills[i]); // tip + bill = total
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(`Average total value of all our bills + tips = ${calcAverage(totals)}`);
