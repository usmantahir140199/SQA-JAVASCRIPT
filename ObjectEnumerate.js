// Enumerating Properties of an Object:
// Get all the properties of an Object
//   Using For-in Loop
//   Using For -of Loop
// Check a property in an Object
const circle = {
    radius : 1,
    draw(){
   console.log('draw');
    }
};

// using for-in loop:
for(let key in circle)
{
    console.log(key,circle[key]);
}

// using for-of loop:
for(let keys of Object.keys(circle))
{
    console.log(keys)
}

for(let keys of Object.entries(circle))
{
    console.log(keys)
}

// Check a Property in an Object

if('radius' in circle)
{
    console.log("Radius is present in Circle Object")
}

if('price' in circle)
{
    console.log("Price is present in Circle Object")
}
if('draw' in circle)
{
    console.log("Yes")
}