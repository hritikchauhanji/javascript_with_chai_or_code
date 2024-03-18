// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 3456543576654356754n

// Reference (Non primitve)
// Array, Object, Functions

const heros = ["shanktiman", "naagraj", "doga"];
console.log(heros)

let myObj = {
    name: "hritik",
    age: 22,
}
console.log(myObj)

const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction)

console.log(id)
console.log(anotherId)

// https://262.ecma-international.org/5.1/#sec-11.4.3