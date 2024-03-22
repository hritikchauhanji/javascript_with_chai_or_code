//singleton
// Object.create

//object literals

const mySum = Symbol("keys1")

const JsUser = {
    name:"Hritik",
    "full name": "Hritik Chauhan",
    [mySum]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hritikchauhanji@gmail.com",
    isLoggedIn: false,
    ladtLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])

JsUser.email = "hritik@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hritik@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user , ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());