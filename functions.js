function reusableFunction(){
    console.log("Hi World");
  }
  
reusableFunction();

function functionWithArgs(a,b){
    console.log(a+b)
}

functionWithArgs(1,2);
functionWithArgs(7,9);

//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(n){
    return n*5;
}

console.log(timesFive(5))
console.log(timesFive(2))
console.log(timesFive(0))
