//You can find the length of a String value by writing .length after the string variable or string literal.

let lastNameLength = 0;
const lastName = "Bencardino";

lastNameLength = lastName;
console.log("My last name is " + lastName);
console.log(lastName.length + " characters");

let firstLetter = lastName[0];
console.log("The first letter is " + "'" + firstLetter + "'");

let thirdLetter = lastName[2];
console.log(thirdLetter);

let lastLetter = lastName[lastName.length - 1]
console.log(lastLetter);

let thridLastLetter = lastName[lastName.length -3]
console.log(thridLastLetter);
