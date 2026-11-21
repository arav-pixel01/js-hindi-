//const tinderUser = new Object() // it is a singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false 

//console.log(tinderUser);

const regularUser = {
 email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2,obj)


const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users[
    {
        id: 1,
        email:"h@gmail.com",
    },
    {
        id:1,email:"h@gmail.com",

    }
]
users.[1].emailconsole.log(tinderUser);




console.log(Objects.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));