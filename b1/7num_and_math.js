const score = 400
// console.log(score)
// console.log(typeof score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// **************** Maths ************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.pow(2, 3));

// by teacher
// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


// by me
// let a = Math.random();
// console.log(a);
// console.log((a*10)+1);
// console.log(Math.floor((a*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);