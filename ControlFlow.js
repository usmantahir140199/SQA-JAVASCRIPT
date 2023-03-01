// Control Flow
// If else Statement
// Switch Statement

// IF ELSE STATEMENT
// 6 to 12  -- Good Morning
// 12  to 18  -- Good Afternoon
// else -- Good Evening

let hour = 10;
if(hour >=6 && hour<=12){
    console.log("Good Morning");
}
else if(hour>=12 && hour<=18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}
let hour = 16;
// Valid For Single Statement
if(hour >=6 && hour<=12)
    console.log("Good Morning");
else if(hour>=12 && hour<=18)
    console.log("Good Afternoon");
else
    console.log("Good Evening");

// Not Valid For Double Statement
if(hour >=6 && hour<=12)
    console.log("Good Morning");
    console.log("Good Morning Usman Tahir");
else if(hour>=12 && hour<=18)
    console.log("Good Afternoon");
else
    console.log("Good Evening");

    // Find the Maximum number between three values
    let a = 100;
    let b = 200;
    let c = 300;
    if(a>b && a>c)
    {
        console.log("The Greatest Value is ",a)
    }
   else if(b>a && b>c){
    console.log("THe Greatest Value is ",b)
   }
   else{
    console.log("The Greatest Value is \t",c)
   }

   if(a>b && a>c)console.log("The Greatest Value is ",a)
  else if(b>c) console.log("THe Greatest Value is ",b)
  else console.log("The Greatest Value is \t",c)


// SWITCH STATEMENT
// 6 to 12  -- Good Morning
// 12  to 18  -- Good Afternoon
// else -- Good Evening
var hour = 23;
switch(hour){
    case 'hour>=6 && hour<=12':
        console.log("Good Morning");
    case 'hour>=12 && hour<=18':
        console.log("Good Afternoon");
    default:
        console.log("Good Evening")    
}

var a = 100;
var b = 200;
var c = 250;
let greater;
switch(greater){
    case 'a>b && a<c':
  console.log("The Greatest Value is",a)
  case 'b<c':
  console.log("The Greatest Value is",b)
  default:
console.log("The Greatest Value is",c)
}

let role = 'guest';
switch(role){
case 'guest':
    console.log("user guest");
    break;
    case 'admin':
    console.log("user admin");
    case 'vendor':
    console.log("user vendor");
    default:
        console.log("No VALID USER")
}



