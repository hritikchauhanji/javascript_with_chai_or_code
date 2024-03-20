//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// let mycreatedDate = new Date(2023, 0, 23)
// let mycreatedDate = new Date(2023, 0, 23, 5, 3)
let mycreatedDate = new Date("01-14-2023")

// console.log(mycreatedDate);
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor(mycreatedDate.getTime()/1000));
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());

// console.log(`Weak day is ${newDate.getDay()} and the Date is ${newDate.getDate()}`);

let newDate2 = newDate.toLocaleString(`default`, {
    weekday: "long",
    
})

console.log(newDate2);