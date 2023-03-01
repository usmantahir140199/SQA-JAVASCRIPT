const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
}

// 1. for-in Loop
const another ={};
console.log(another)
for(let key in circle)
{
    another[key] = circle[key];
    console.log(another)
}

// 2. using Object.assign method:
// Blank Object
const another2 = Object.assign({},circle)
console.log(another2)

// Adding properites in Object
const another3 = Object.assign({
    price: 100,
    value: 200,
    log(){
        console.log('log')
    }
},circle)
console.log(another3)


// using spread... operator
const another4 = {...circle};
console.log(another4);
another4.draw();