const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateWeightInput(data){
  let errors = {};

  // convert empty fields to an empty string so we can use validator functions
  data.weight = !isEmpty(data.weight) ? data.weight : "";

  // Email checks
  if(Validator.isEmpty(data.weight)){
    errors.msg = "Weight field is required";
  } else if (!Validator.isFloat(data.weight)){
    errors.msg = "Weight is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}