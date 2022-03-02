const myValidator = require("validator");
var userEmail = "foo@bar.com";
if(myValidator.isEmail(userEmail)) {
    console.log("Valid Email");
}else {
    console.log("Not valid Email");
}