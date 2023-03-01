// Variables and Constant in JS:

// Variables:
let name = "Usman";
console.log(name);
let age = 25;
let color = 'red';
console.log(name + ' ' + age);
console.log(2+2);

let range = 4;
range = 5;
console.log(range);

// var vs let
let range = 4;
let range = 5;
console.log(range);

var range =4;
var range = 5;
console.log(range);

// Constant:
const name = "Usman Tahir";
//name = "Usman";
console.log(name);


// DataTypes:

// Primitive DataTypes:

// String:
var a = "JavaScript";
console.log(a);

// Number:
var b = 34;
console.log(b);

// boolean:

let flag = true;
let isActive = false;
console.log(flag + ' ' + isActive)
console.log(typeof(flag));


// Undefined:
let price;
console.log(price);
console.log(typeof(price));
// Null:
let c = null;
console.log(c);
console.log(typeof(c));

// JS is Dynamic Typing:
let d = "Usman";
d = 30;
console.log(d);
console.log(typeof(d));

// Reference DataTypes:

// Objects:
let user = {
name : "Usman",
age : 23
};
console.log(user);
// How to Access property of object
// 1. Dot Notation
console.log(user.name);
console.log(user.age);
user.age = 32;
console.log(user.age);
console.log(user.name + ' ' + user.age);


// 2. using bracket notation:
user['name'] = "MuhammadUsmanTahir";
console.log(user.name);


// Array
// List of Objects
let language = ['java','javascript'];
console.log(language);
console.log(language[0]);
console.log(language.length);

language[1] = 'PHP';
console.log(language[1]);

language[2] = "CSS";
console.log(language);

console.log(typeof(language))

// Functions
// Zero Parameter Function or simple function
function getName(){
console.log("This is my function")
}
// Call the Function
getName();

// Parameter Based Function
function greet(name){
    console.log("Hello" + " " + name);
}
greet("UsmanTahir");

function greet(name,age){
    console.log("Hello" + " " + name + " " + age);
}
greet("UsmanTahir",24);
greet("Muhammad");
greet();

// Return From Function
function add(num1,num2){
    return num1+num2;
}
console.log(add(10,13));
let a = add(5,3);
console.log(a);

function SquareRoot(Number){
    let root = Number * Number;
    return root;
}
let z = SquareRoot(5);
console.log(z);
z = SquareRoot(10);
console.log(z);