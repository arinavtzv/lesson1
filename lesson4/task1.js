"use strict";
alert('task 1');

let capitalise = (str) => (str[0].toUpperCase()+str.slice(1));

let myString = prompt("Enter a string:", "");
let newString = capitalise(myString);
console.log(newString);
