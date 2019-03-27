const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? 
        data.password_confirm : '';
    
    if(!Validator.isLength(data.name, {min: 2 , max: 10})) {
        errors.name = "Name must be between 2 to 10 Characters";
    }

    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is Invalid"
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required"
    }
    
}

