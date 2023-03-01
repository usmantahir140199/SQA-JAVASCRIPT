// Factory Function
// Camel Case
function circle(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
}
const c1 = circle(1);
console.log(c1);
const c2 = circle(5);
console.log(c2);
console.log(circle) ;
console.log(c1.radius);
c1.draw();



// Constructor Function
// Pascal Case
function circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw', radius);
    }
}
// How to call a constructor function
const a = new circle(1);
console.log(a);
console.log(a.radius);
a.draw();

