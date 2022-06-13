// Printing table using while loop 


let Name = +prompt("enter a Number");

console.log(Name);
let num = 1;

while (num <= 10) {
    let table;
    table = Name * num;
    num++;
    console.log(`table for ${Name} is ${Name} * ${num - 1} = ${table}`);
}