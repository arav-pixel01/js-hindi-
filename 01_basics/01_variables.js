const accountId = 144553
let accountEmail = "john@example.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 2 //not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "jane@example.com"
accountPassword = "212121"
accountCity = "Bengaluru" 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);