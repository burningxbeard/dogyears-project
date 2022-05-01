// declare variable named myAge and input age
const myAge = 44;
//  declare the myName variable and use the built-in .toLowerCase method 
const myName = 'Chris'.toLowerCase();
// dogs age 10.5 years during the first 2 years of their life
let earlyYears = 2;
earlyYears *= 10.5;
// subtracting 2 years from myAge to account for earlyYears of the dogs age then multiply by 4
let laterYears = myAge - 2; 
laterYears *= 4; 
// adding earlyYears and laterYears to calculate age in dog years 
const myAgeInDogYears = earlyYears + laterYears;
// log answer to console using the String method with string interpolation
console.log(`Hello, my name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`);
