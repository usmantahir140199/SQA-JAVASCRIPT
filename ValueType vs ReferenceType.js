// Value Type
// number, string, boolean, symbol, undefined , null

// Reference Type
// Array, Function and Objects


// Value Type(pass by value) or Non Primitive DataTypes

let x = 10;
let y = x;
x = 20;

console.log(x)
console.log(y)
// Reference Type(pass by reference) or Primitive DataTypes
let p ={
    value : 10
};
let q = p;
p.value = 20;

console.log(p.value)
console.log(q.value)