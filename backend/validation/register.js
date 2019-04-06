const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";

  if (!Validator.isLength(data.name, { min: 2, max: 10 })) {
    errors.name = "Name must be between 2 to 10 Characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must have 6 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = "Password must have 6 charaters";
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Confirm password is required";
  }

  if (Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Password and confirm password must match";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};