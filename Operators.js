// Different Operators in JS
//  Arithmetic Operators
//  Assignment Operators
//  Ternary Operators
//  Binary Operators
// Comparison Operators
// Logical Operators

// Arithmetic Operators
let x= 10;
let y= 20;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(2**3);
console.log(x%y);

// Increment(++) and Decrement (--)
let p = 10
// Post Increment
console.log(p++)
// Pre Increment
console.log(++p)
// Post Decremnt
console.log(p--)
// Pre Decrement
console.log(--p)

// Assignment Operators
let q = 10;
let w = q+1;
console.log(q+w);

console.log(q +=10);
console.log(q -=10);
console.log(q *=10);
console.log(q /=10);
console.log(q%=11);
console.log(q<<=10);
console.log(q>>=10);
console.log(q>>>=10);
console.log(q&=10);
console.log(q|=10);
console.log(q^=10);

// Comparison Operators OR Relational Operators
let x = 1;
let y = 2;
console.log(x>1);
console.log(x<1);
console.log(x>=1);
console.log(x<=1);
console.log(x!=y);
console.log(x==y);
console.log(x===y);
console.log(x!==y);
// Lose Equality
console.log(true == 1);
Strict Equality
console.log(true === 1);

// Ternary Operators

let points = 100;
let type = points >= 100 ? 'gold' : 'silver';
console.log(type);


// Logical Operators
let highIncome = true;
let goodCreditScore = false;

// And (&&)
console.log(true && false);
console.log(highIncome && goodCreditScore);

// OR (||)
console.log(true || false);
console.log('\n');
console.log(highIncome || goodCreditScore);

// Not(!)

console.log(! highIncome);
console.log(!(10>5));
console.log(!(10<5));


// Logical Operators with Non Boolean Values
// Falsy Values(False)
console.log(false || 'usman');
console.log(false && 'usman');
let z;
console.log(false || z);
console.log(false && z);
// Truthy values
console.log(false || 1 || 2);
console.log(true || 1 || 2);
console.log(false || undefined);
console.log(true || null)

// real time example
// let userColor = 'red';
 let userColor = undefined
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


// Binary or Bitwise Operators(Not Much Important)
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); //3
console.log(1 & 2); //0

// Operator Precedence
console.log(2+3*4);
console.log((2+3)*4);

// Swap two values
let a =10;
let b =20;
console.log(a);//10
console.log(b);//20
// Swaping element is c
let c;
c= a;//10
a= b;//20
b= c;//10
console.log(a);//20
console.log(b);//10
 
