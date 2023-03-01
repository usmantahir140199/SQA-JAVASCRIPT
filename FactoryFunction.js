// Objects
// variable and function should be defined in an Object
// Key: value pair format

const circle = {
     radius : 1,
     isVisible : true,
     location : {
        x : 1,
        y : 1
     },

draw : function(){
    console.log('draw');
}
}
circle.draw()
console.log(circle.location)
console.log(circle.radius)
console.log(circle.isVisible)
console.log(circle)
console.log(circle.location.x)


// Factory Functions
// It produces objects

function createCircle(radius){
    const circle = {
        radius : radius,
        isVisible : true,
        location : {
           x : 1,
           y : 1
        },
   
     draw(){
       console.log('draw');
   }

}
return circle;
}
const c1 = createCircle(1);
console.log(c1)

const c2 = createCircle(5);
console.log(c2.radius)
