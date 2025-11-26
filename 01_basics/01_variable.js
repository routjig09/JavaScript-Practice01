const accountId = user123
let accountEmail = "jigyansha@gmail.com"
var accountPassword = "myPassword123"
accountCity = "bangalore"

// accountId = 2  Not allowed

accountEmail = "jr@jp.com"
accountPassword = "newPassword456"
accountCity = "Mumbai"
console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity]); 
