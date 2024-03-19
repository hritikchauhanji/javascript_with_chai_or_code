const names = "hritik"
const repoCount = 50

// console.log(names + repoCount + "value")

// console.log(`Hello my name is ${names} and my repo count is ${repoCount}`)

const gameName = new String('hritik-chauhan-ji')

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.toLocaleLowerCase())
// console.log(gameName.toLocaleUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,6)
// console.log(newString)

const anotherString = gameName.slice(-17, 5)
// console.log(anotherString)

const newStringOne = "   hritik   chauhan    "
// console.log((newStringOne))
// console.log((newStringOne.trim()))
// console.log((newStringOne.trimStart()))
// console.log((newStringOne.trimEnd()))

const url = "https://indianpatriot.com/hritik%20chauhan"

console.log(url.replace('%20', '-'))
console.log(url.includes('hritik'))
console.log(gameName.split('-'))