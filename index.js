//Section 1: Declaring and initializing variables
//variables: var, let or const
console.log("Section 1:");
let naam = "Blessing";
let lastName = "Baloyi";
console.log("Name and surname: " + naam + " " + lastName + "\n");

let intesrestRate = 0.3;
intesrestRate = 0.1;
console.log("Interest rate: " + intesrestRate + "\n");









//Section 2: Primitive types/Value types
console.log("Section 2:");
let name = 'Blessing';//String: 
let age = 21;//Number: 
let isApproved = true;//Boolean: 
let firstName = undefined;//undefined: 
let selectedColor = null;//null: 
console.log("Interest rate var data type: " + typeof(intesrestRate) + "\n"); //using typeof method to check type of var









//Section 3 Reference types:  Objects, Arrays and Functions
console.log("Section 3.1: Objects");


//objects
//object literal 
let id ='';
let email = '';

let human = {
    id: '030809',
    name: 'Blessing',
    email: 'blessingt@xcode.com'
};
//representing the object
console.log(human);
console.log("\n")
//representing the object with concatenation
console.log("Person details: " + JSON.stringify(human) + "\n");

//accessing values from an object

//via Dot notation
console.log("Access via dot notation: " + human.name);

//via Bracket notation
console.log("Access via bracket notation: " + human['name'] + "\n");










//Section 3.2: Arrays - data structure used to represent a list of objects/items
console.log("Section 3.2: Arrays");

let selectedColors = ["red", "blue"];
console.log("Selected colors: " + selectedColors + "\n");



//displaying the array list with a for loop
console.log("Selected colors list: ");
for(let x=0; x<selectedColors.length; x++)
{
    console.log(selectedColors[x]);
}console.log("\n");









//Section 3.3: Functions - set of statements that performs a task or calculates a value
console.log("Section 3.3: Functions");

//Greet function to perform a task 
function greet(fName, lName){
    console.log("Hello " + fName + ' ' + lName);
}

greet('John', 'Smith');
console.log("\n")


//Square function to calculate a value and return it
function square(number) {
    return number * number;
}

let input = square(2);
console.log("Sqaure of " + 2 + "=" + input)
