// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE

// (re: line 41) - We make a variable called name and set it to 'Dane' as a name.
// 
// (re: lines 43-47) - We write a conditional statement to evaluate the value of a name.
// If the value of the name exactly (===) matches 'Mary' (e.g., is TRUE, e.g., if the
// condition is met), then the code executes (e.g., console logs or prints) the
// conditional statement 'Hi, Mary!'; else if the value of the name does not
// match 'Mary' (e.g., is FALSE, e.g., if the condition is not met), then
// the code executes (e.g., console logs or prints) the conditional statement 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 
// (re: line 71) -  We make an undefined variable called secret.
// 
// (re: line 73) - We make a number variable called code and set it to the number 123 as a code.
//
// (re: lines 75-78)  - If the value of the variable code exactly (===) matches the nunber 123 (e.g., is TRUE, e.g., if the
// condition is met), then the code block is run and the undefined variable 'secret' is now defined as the string 'super'.
// The code block continues to run and the variable code is redefined as its value multiplied by 2 (e.g., 123 times (*) 2) = 246.
// 
// (re: lines 80-82) - If the value of the variable 'code' is greater than (>) 250 (e.g., is TRUE, e.g., if the condition is met), 
// then the code block is run and the undefined variable 'secret' is now defined as the string 'duper'.
// The value of the variable 'code' is not greater than 250 as it is now 246 therefore the variable 'secret' remains defined
// as the string 'duper'.
// 
// (re: line 84) - The code executes (console logs or prints) the still defined value of 'secret' as the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE

// (re: lines 106-118) - We make a boolean variable called 'isStudent' and set it to 'true'; we make a number variable
// called 'age' and set it to the number 34; we make a number variable called 'zip' and set it to the number 55407.
// 
// (re: lines 102-110) - If the value of isStudent is exactly true and if the value of zip is greater than 80000, then
// the code block is run and the code executes (console logs or prints) the conditional statement 'You're a student on
// the West Coast!'. Both of these conditions were not met therefore the conditional statemnent would not be executed.
// If the value if isStudent is false or (only one of the conditions needs to be me) the age is less than 30 then the code
// block is run and the code executes (console logs or prints) the conditional statement 'What are your hobbies?'. Neither
// of the conditions were met therefore the conditional statement would not be executed. If the value of isStudent is exactly
// true (which it is), then the code block is run and executes the conditional statement 'Welcome to Prime!' If the variable isStudent
// was false (which it is not but rather is true) then the code block is run and executes the conditional statement
// 'How about the weather?' (which is did not execute).
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be 'blue' and colorTwo should be 'red' per instructions
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - mix is true therefore both colors become purple so colorTwo needs to be added as follows:
// if (mix === true) {
//  colorOne = 'purple'; colorTwo = 'purple';
// }

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - instructions state 'and' for both conditionals but the code is written 'or' so
// the '||' needs to be changed to '&&'. Also need to remove 'const' in front of the
// variable 'time' and change it to 'let time = 4;' as the instructions did not
// state that the variable 'time' cannot be changed. The instructions say 'and' so both
// conditions of the 2 variables need to be true in order to console log the statement
// 'throw away the food!'. They are not both true therefore the statement will not
// console log.

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX - instructions say to check if age is greater than or equal to minAge,
// however code is written if minAge is less than or equal to age. This part needs to change to
// 'if(age >= minAge)' because the way it is written in error would deny someone entry if their age = 21.
// New code should be:
// 
// if(age >= minAge) {
//   console.log('enter');
//   }
// else{
//   console.log('no entry')
// }

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

