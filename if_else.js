// if else condition 

let age = prompt("enter your age"); // prompt keyword is used to take the input from the user
if (age < 18) {
    console.log("Go and Watch POGO");
} else if (age >= 18 && age < 45) {
    console.log("You ca play GTA");
} else if (age > 45 && age < 100) {
    console.log("You should take rest");
} else {
    console.log("enter a valid age ");
}