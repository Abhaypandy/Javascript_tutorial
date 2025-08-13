const account_Id=144553
let account_email="abhaypandey@gmail.com"
var account_password="12345"
account_City="jaipur"
// we normally use let and const 
let account_state;

// account_Id=2 , const vairbles can not be change
// Prefer not to use var because of issue in block scope and funtional scope
account_password="54321"
account_City="Benglaru"
account_email="abhay@gmail.com"
console.log(account_Id);
console.table([account_email,account_password,account_City, account_state]);
