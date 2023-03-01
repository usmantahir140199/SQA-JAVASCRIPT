// Math and Date Object or Method

// Math Object or Method
console.log(Math.random());
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.sqrt(2));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.pow(2,3));

function getRandomArbitrary(min,max){
    return Math.random() * (max-min) + min;
}
 let a = getRandomArbitrary(5,100);
 console.log(Math.floor(a));

 // Date Methods or Object

// Current Date or time
 const now = new Date();
 console.log(now);
// Customized date and time
 const date1 = new Date('2023-01-18 00:08:00');
 console.log(date1) 

 // Jan index will start from 0
 // Dec index will start from 11
 const now = new Date();
 const date2 = new Date(2019,11,17,9,3,0);
 console.log(date2)
 console.log(date2)
 console.log(now.getDate())
 console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getDay())
console.log(now.getMilliseconds())
console.log(now.getSeconds())
console.log(now.toDateString())
//console.log(date1.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString())