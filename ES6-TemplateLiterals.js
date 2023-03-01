const msg =  "this is my first javascript code";
// Escape Characters
const msg1 = "this is my\n second javascript code";
// Append Method
const msg2 = "this is my\n" +
 "second javascript code";

 const msg3 = "this is my\n" +
 "'\second\' javascript code";

console.log(msg);
console.log(msg1);
console.log(msg2); 
console.log(msg3); 

// Literals
// Object Literals = {}
// Boolean Literals = true,false
// String Literals = '', ""
// ES6: Template Literals ---> Back Tick Char ---> ``


// ES6: Template Literals
const mailBody = `Hi Tom ,
this is usman here!
Thanks for adding me in your mailing list
Have a great day
Regards
Usman Tahir
`
console.log(mailBody);

let name = 'Usman Tahir'
const mailBody1 = `Hi ${name} ,
this is usman here!
Thanks for adding me in your mailing list
Have a great day
Regards
${name}
`
console.log(mailBody1);

let name = 'Usman Tahir'
const mailBody2 = `Hi ${name} ${2+4},
this is usman here!
Thanks for adding me in your mailing list
Have a great day
Regards
${name}
`
console.log(mailBody2);

let product = function(){
return 'Apple';
}

let name = 'UsmanTahir'
const mailBody3 = `Hi ${name} ${product()},
this is usman here!
Thanks for adding me in your mailing list
Have a great day
Regards
${name}
`
console.log(mailBody3)