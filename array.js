//With JavaScript array variables, we can store several pieces of data in one place. Strings and/or numbers.

//Access Array Data with Indexes
const myArray = [50, 60, 70];
var myData = myArray[0]; 

//Modify Array Data With Indexes
const newArray = [18, 64, 99];
newArray[0] = 45;
newArray[1] = 64;
newArray[2] = 99;
console.log(newArray);

//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
                            //if I want to select an element equal to 8:
const data = arr[2][1];
console.log(data);

//Manipulate Arrays With push()
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);
