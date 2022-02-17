'use strict';
// LECTURE: Functions--------------------
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry() {
//     const country = prompt("Name of country?");
//     const population = prompt("Population? "); // behövs ej Number()
//     const capitalCity = prompt("Capital City? ");
//     return `${country} has ${population} million people and its Capital is ${capitalCity}`;
// }

// function describeCountryAgain(country, population, capitalCity) {
//     return `${country} has ${population} million people and its Capital is ${capitalCity}`;
// }


// const someCountry = describeCountry();
// const sweden = describeCountryAgain("Sweden", 600000000, "Stockholm");
// console.log(someCountry);
// console.log(sweden);

// ----------------------- Function Declarations vs. Expressions
//
// labb på func expression
// const percentageOfworld1 = function (population) {
//     return (population / 7900) * 100;
// }

// const percUSA1 = percentageOfworld1(332);
// console.log(Math.round(percUSA1) + "%");

// CODING CHALLENGE #1

// ARROW FUNCTION
// const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

// let dolphinsAVG = calcAverage(44, 23, 71); // let to be changeable
// let koalasAVG = calcAverage(65, 54, 49);


// // EXPRESSION FUNCTION
// const checkWinner = function (dolphinsAVG, koalasAVG) {
//     if (dolphinsAVG >= 2 * koalasAVG) {
//         console.log(`Dolphins win 🎈 (${dolphinsAVG} vs ${koalasAVG})`);
//     } else if (koalasAVG >= 2 * dolphinsAVG) {
//         console.log(`Koalas win 🎈 (${koalasAVG} vs ${dolphinsAVG})`);
//     } else {
//         console.log("No team wins! 😒");
//     }
// }

// // TEST DATA 1
// checkWinner(dolphinsAVG, koalasAVG);
// // variables declared above checkwinner func
// // checkWinner(576, 111); // test

// // TES DATA 2
// // overwrite, not create new lets
// dolphinsAVG = calcAverage(85, 54, 41);
// koalasAVG = calcAverage(23, 34, 27);
// checkWinner(dolphinsAVG, koalasAVG);

// // TEST DATA 3
// koalasAVG = calcAverage(91, 54, 41);
// dolphinsAVG = calcAverage(23, 34, 27);
// checkWinner(dolphinsAVG, koalasAVG);

// EGEN CHALLENGE
// Return a Boolean if a number is Even or Odd

// // expression function
// const checkIfOddnumber = function (number) {
//     if (number % 2 === 0) { // strict equal
//         console.log("Number is Even")
//     } else {
//         console.log("Number is Odd")
//     }
// }

// checkIfOddnumber(5);
// checkIfOddnumber(6);

// ----- LECTURE: Introduction to Arrays
// const populations = [521521251521515, 414141425125155, 8181818251521, 202002022515151];

// const checkIfArrayContains4 = function (array) {
//     if (array.length === 4) {
//         console.log("yes 😁");
//     } else {
//         console.log("Niet 😂");
//     }
// }

// const percentageOfworld1 = function (population) {
//     return (population / 7900) * 100;
// }

// checkIfArrayContains4(populations);

// const percentages = [percentageOfworld1(populations[0]), percentageOfworld1(populations[1]), percentageOfworld1(populations[populations.length - 1])];

// console.log(percentages);

// ---------------------- CODING CHALLENGE # 2

// Om billValue >= 50 och <= 300 === 0.15 Annars * 0.2

// // ternary operator med if statement ? if()expression : else()expression
// const calcTip = function (billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// }

// const bills = [125, 55, 44];
// console.log(bills);

// // array with the tips, expression so u can call func in the array
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// // array with total + tips per value
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);


// -------------- CODING CHALLENGE # 3

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Ronsson",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// // created a property now available since we used function
// console.log(mark);
// console.log(mark.bmi); // bmi
// console.log(john.bmi); // bmi

// const checkWinner = function (markBMI, johnBMI) {
//     if (markBMI > johnBMI) {
//         console.log(`${mark.fullName}'s BMI: ${mark.bmi} is higher than ${john.fullName}'s BMI: ${john.bmi}`);
//     } else if (johnBMI > markBMI) {
//         console.log(`${john.fullName}'s BMI: ${john.bmi} is higher than ${mark.fullName}'s BMI: ${mark.bmi}`);
//     }
// }

// checkWinner(mark.bmi, john.bmi);

// ------------- LECTURE: Iteration: The for Loop
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

// ------------------------