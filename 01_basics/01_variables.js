const accountId = 12232324
let accountEmail = "nikhil22csu305@ncuindia.edu"
var accountPassword = "Nifdns@322"
accountCity = "Jaipur"
let accountState;


// accountId = 2  // not allowed
accountCity = "delhi"
accountPassword = "hero"
accountEmail = "nik@12gma"
console.log(accountId)

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])