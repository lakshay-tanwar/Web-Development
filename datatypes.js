// datatypes are the types that defines the data 
// string "Lakshay"
// numbers "0123"
// boolean "true false"
// undefined
// null 
// bigint 
// symbol 

// typeof keyword is used to check the datatype of a variable 
let firstname = "lakshay";

console.log(typeof firstname);

let age = 18;
console.log(typeof age);


// for changing number to string just add empty string to variable
let newage = age + "";
console.log(typeof newage);
// alternate 
let new_age = String(age);
console.log(typeof new_age);


// for changing string to number ust add + sybol in front of string 
let number = +"50";
console.log(typeof number);

// if we declared a string and didnot enter any value then it will become undefined 
// example 
let home;
console.log(typeof home);

// null is an empty variable 
let myvariable = null;
console.log(typeof myvariable); // it will produce thee output as object because null is also an object 
// an error in javascript