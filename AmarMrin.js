// arithmetic Challenge

2+2 -1;
76 * 4;
304/76
10 % 3;
335 % 4;
335/4;
56487568436583465834/0;
0/0;


// VARIBALES challenge


var favoriteNumber;
favoriteNumber = 10;
favoriteNumber/2;
var someonesFavorite = 13;
someonesFavorite = 45786464744385;
someonesFavorite = 3434534
someonesFavorite = 7
someonesFavorite -favoriteNumber;
someonesFavorite *26;


// degree converter\
// (number) ?? its probably given
var celsius = 80;
function toF(number) {return celsius * 9/5 + 32;};
var f=176;
function toC(number) {return (f - 32) * 5/9;};
toC(176);

// Functions challenge
function subtract(a, b) {return a-b;};
function multiply(a, b) {return a*b;};
function divide(a, b) {return a/b;};

function greet() {
  var name = prompt("What is your name?"); alert("Good luck " + name + "!");
};

function reverseCharAt(string, index) {
  string.charAt((string.length-1) - index);
};

// Functions Stretch Goal

function lifetimeSupply (age, dayAmount) {
  return dayAmount * 365 * (70-age);
};

// Temp converter super strecth goal
var c = 80;
function toF(c) {return c * (9/5) + 32;};
console.log( 'In Fahrenheit it it equal to ' + toF(c));

var f= 176
function toC(f) {return (f- 32) * 5/9;};
console.log( 'In Celsius, it is equal to ' + toC(f));



// Password Checker challenge

function isUserValid(userID) {
  return userID.length >= 6 && (!userID.includes("!") && !userID.includes("#") && !userID.includes("$"));
};

function isPasswordValid(password) {
return password != "password" && password.length >= 6 && (password.includes("!") || password.includes("#") || password.includes("$"));};



function isAcceptable (userID, password) {
return isUserValid(userID) && isPasswordValid(password)  && password != password.toLowerCase;};

function displayValidity() {
  var userID = prompt("Enter a user ID please");
  var password = prompt("Enter a password please");
  alert("Is your login info valid?: " + isAcceptable(userID, password));
};
