const Validator = require("validator");
const isEmpty = require("is-empty");

// exports this function to be called and pass the data to be validated
module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert the empty fields to an empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // check the name
  if(Validator.isEmpty(data.name)){
    errors.name = "Name field is required";
  }

  // check the email
  if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required";
  }else if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }

  // checks the passwords
  if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required";
  }

  if(Validator.isEmpty(data.password2)){
    errors.password2 = "Confirm password field is required";
  }

  if(!Validator.isLength(data.password2, {min: 6, max: 30})){
    errors.password = "Password must be at least 6 characters";
  }

  if(!Validator.equals(data.password2, data.password2)){
    errors.password2 = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors);
  }

}