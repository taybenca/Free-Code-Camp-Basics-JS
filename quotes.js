//Escaping literal quotes in strings
const myString = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myString);

//removing the escape characters
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

//adding three lines without use spaces, second line must have a backslash and tab.
const newStr = "FristLine\n\t\\SecondLine\nThirdLine"
console.log(newStr);

//constructing strings with variables
const myName = "Tayanne";
const phrase = "Hello, my name is " + myName + ", and I am well!"
console.log(phrase);