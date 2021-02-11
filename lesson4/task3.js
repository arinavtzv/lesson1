"use strict";
alert('task3');

let getDigitsSum = (x) =>{
    let sum = 0;
    for(let i = 0; i<x.length; i++){
        sum+=Number(x[i]);
    }
    return sum;
};

let a = prompt('Enter a number');
alert(getDigitsSum(a));