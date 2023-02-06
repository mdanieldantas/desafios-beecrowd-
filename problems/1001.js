'use strict'

export function problem(lines) {
    const A = lines[0];
    const B = lines[1];

    const X = Number(A) + Number(B);

    console.log(`X = ${X}`)
}
/*


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = 10;
var b = 9;
var x = a + b;
console.log("X = " + x)

var a = -10;
var b = 4;
var x = a + b;
console.log("X = " + x)

var a = 15;
var b = -7;
var x = a + b;
console.log("X = " + x)

------------------------------------------------------------
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
   
console.log('X = ' + (a+b));
-----------------------------------------

let A = parseInt(prompt('Insira o valor de A:'));
let B = parseInt(prompt('Insira o valor de B:'));
let X = A + B;

console.log('X = ' + X);



*/