const circle = {
    radius : 1,
    color : 'red',
    log(){
console.log('log',this.color);     
    }
}

console.log(circle);
console.log(circle.radius);
console.log(circle.color);
circle.log();

// Add more properties in circle or object
circle.price = 100;
circle.draw = function(){
    console.log('draw');
}
circle.isPresent = true;
console.log(circle);

// Delete properties from object 
delete circle.radius;
console.log(circle)

delete circle.draw;
console.log(circle)
circle.log();