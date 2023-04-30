import { Toaster, toast } from "react-hot-toast"


/** validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors; 
}

/** validate password */
export async function PasswordValidate(values){
    const errors = passwordVerify({}, values);

    return errors; 
}

/**  Validate Profile */
export async function ProfileValidate(values){
    const errors = emailVerify({}, values);
    return errors;
}

/**Validate reset password  */
export async function resetPasswordValidate(values){
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_password) {
        errors.exist = toast.error("Password does not match!")
    }
    
    return errors;
}

/** Validating the register form */
export async function registerValidate(values){
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values);
    emailVerify(errors, values); 

    return errors;
}


/********************************************************** */

/** validate password */
function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong password...!")
    } else if(values.password.length < 4){
        errors.password = toast.error("Must be more than 4 characters long! Try again...! ")
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Missing special character...!")
    }

    return errors;
}


/** validate username */
function usernameVerify(error = {}, values){
    if (!values.username) {
        error.username = toast.error("Username Require...!");
    } else if (values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }

    return error; 
}

/** Validate e-mail */
function emailVerify(error = {}, values){
        if(!values.email){
        error.email = toast.error("Email Required...!"); 
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email....!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A=Z]{2,4}$/i.test(values.email)){
        error.email = toast.email("Invalid email address...!")
    }

    return error;
}

