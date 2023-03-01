// Types of Loop
// For Loop
// While Loop
// Do While Loop
// For-in Loop
// For-off Loop

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

// For Loop
for(let i =0; i<5;i++){
    console.log(i);
   console.log("Hello World") ;
}
// Single Statement or not valid for multiple statement
for(let i =0; i<5;i++) console.log("Hello World") ;
// Break Statement
for(let i =0; i<5;i++){
    console.log(i);
    if(i==2){
   break;
}
console.log("Hello World") ;
}
// Continue Statement
for(let i =0; i<5;i++){
    console.log(i);
    if(i==2){
   continue;
}
console.log("Hello World") ;
}

for(let i =0; i<10;i++){
    console.log(i);
    if(i%2==0){
        console.log("Hello World") ;
}
}

// While Loop
let i = 0;
while(i<5){
    console.log(i);
    console.log("Hello World");
    i++;
}

let j = 11;
while(j<=10){
    console.log(j);
    j++;
}

// DO WHILE LOOP
let i =0
do{
    console.log(i)
 console.log("Hello World");
 i++;
}
while(i<5);

let j = 11;
do{
    console.log(j);
    j++;
}
while(j<=10);



// For-in Loop
// it is like foreach loop
// it is used for fetch the data from objects

const person = {
    'name' : 'Usman',
    'age' : 24
}
for(let key in person)
{
    console.log(key);
  //  console.log(key.name)
  //  console.log(key.age)
  // console.log(person.name)
  // console.log(person.age)
   console.log(key,person[key])
 //  console.log(key,person.key)

}
const person = {
    name : 'Usman',
    age : 24
}
for(let key in person)
{
    console.log(key);
  //  console.log(key.name)
  //  console.log(key.age)
  // console.log(person.name)
  // console.log(person.age)
   console.log(key,person[key])
 //  console.log(key,person.key)

}
/*
for (let value in person)
{
    console.log(value);
}
*/

// Array
const color =['red','green','blue'];
for(let index in color)
{
    console.log(index);
    console.log(index,color[index]);
   // console.log(a,color.a);
}

// For-of Loop
// It is specially used for getting the values from Array
const color = ['red','yellow','golden']
for (let col of color)
{
    console.log(col);
}

// Infinite Loops
let i =0;
while(i<=5)
{
    console.log(i)
}