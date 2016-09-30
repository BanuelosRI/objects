// Purpose: 1. Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.
// 2. For each criteria create a function that checks the string for the password or username and returns one of two objects.
//
// 3.Either { valid: true } or { valid: false, reason: "User ID cannot contain $"} with the reason for the rule failing.
// Then create a main function that runs all functions and prints out all failures for all criteria one at a time.
// Signature :
// Example :








// checkId will take string, boolean
// checkId is true if string is valid, if not it is false.
// userID ("123456") would be true
// userID "password" would be true
// userID ("12345") would be false
// userID ("123 ! # $") would be false


var userID;
var pass;

function checkId(userID) {
  return userID.length >= 6 && !userID.includes("!") && !userID.includes("#") && !userID.includes("$");
}

function checkPass(pass) {
  return pass.length >= 6 && pass.toUpperCase() != pass && pass.toLowerCase() != pass && ((pass.includes("!") || pass.includes("#") || pass.includes("$")) && (pass.includes("0") || pass.includes("1") || pass.includes("2") || pass.includes("3") || pass.includes("4") || pass.includes("5") || pass.includes("6") || pass.includes("7") || pass.includes("8") || pass.includes("9")));
}

function checkCreds(userID, pass) {
  return checkId(userID) && checkPass(pass) && pass!== userID;
}

function getCreds() {
  userID = prompt("Enter userID. Can't be same as password. Must be atleast 6 characters. Cannot have !, #, or $");
  pass = prompt("Enter password. Must be atleast 6 characters. Must include one of the following: !, #, or $. Cannot be 'password'");
  alert("Your creds are acceptable " + checkCreds(userID, pass));
}

var
function psCheck() {
  return{
    checkId: function() {
      userID.length >= 6 && !userID.includes("!") && !userID.includes("#") && !userID.includes("$");
    },

};
}
function criteriaId() {password, username}
  return {
    password: password,
    username: username,
     checkId: function() {
      return this.modelyear + "-" + this.make + "-" + this.color
    }
    };
  }
