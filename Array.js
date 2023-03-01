const courses = [{
    id : 1,
    name : 'C++'
},
{
    id : 2,
    name : 'JS'
}
];

const c1 = courses.find(function(course)
{
    return course.name === 'JS';
});
console.log(c1)
// Arrow Functions or Lambda Function

console.log(courses.find(course=> course.name==='C++'));


const num = [1,2,3,4,5]

// Remove the element from the end of an array
num.pop()
console.log(num)

let last = num.pop()
console.log(last)

//  Remove the element from the beginning of an array

num.shift()
console.log(num)

// Remove the element form the middle of an array

num.splice(0,1)
console.log(num)

// Remove all the values directly
num.splice(0)
console.log(num)

// EMPTY AN ARRAY
// 1. Blank or Empty Array
console.log('------------------')
let num1 = []
let num2 = [1,2,3,4]
console.log(num1)
let another = num2
num2=[]
console.log(num2)
console.log(another)
//  2. using Lenght
let num3 = [1,2,3,4]
let another1 = num3;
num3.length = 0;
console.log(another1)
console.log(num1);

// 3. using Splice Method
let num4 =[1,2,3,4]
num4.splice(0,num4.length)
console.log(num4)

// 4. pop method
num5 = [1,2,3,4,5,56]
while(num5.length>0)
{
    num5.pop();
    console.log(num5)
}

