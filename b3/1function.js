function sayName() {
    console.log("H");
    console.log("R");
    console.log("I");
    console.log("K");
    console.log("I");
    console.log("K");
}

// sayName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(5, 4)
// console.log("Result : ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hritik"));

// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(var1, var2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500,  1000]));