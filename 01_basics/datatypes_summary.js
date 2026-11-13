// Primitive

const { useInsertionEffect } = require("react");

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 345857094n


// Reference (Non primitive)

// Array , Object , Funations


const heros = ["shaktiman" , "naagraj" , "doga"];

let my0bj = {
    name: "hitesh",
    age:22,

}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof myFunction)


//****************************************************************************** 

// stack(primitive) , heap (Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"



let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);


let useOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userTwo

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


