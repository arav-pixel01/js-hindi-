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
console.log(regularUser.fullname.userfullname);