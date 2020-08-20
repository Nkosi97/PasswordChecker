function password_is_valid(password) {

    try {
        if (password == "") throw `password should exist`
        if (password.length < 8) throw `password should atleast have 8 characters`
        if (!password.match(/[a-z]/g)) throw `password should have one lower character`
        if (!password.match(/[A-Z]/g)) throw `password should have uppercase letters`
        if (!password.match(/[{(!@#$%^&*.,\')}]/g)) throw `password should have atleast one special character`
        if (!password.match(/[0-9]/g)) throw `password should have atleast one number`

        return `password is valid!`;
    } catch (error) {
        console.error(`Invalid password: ${error}`)
    }
    return password

}

function passwordIsOk(password) {
        if(password !== "" && password.length > 8 && password.match(/[a-z]/g)){
        return true;
        }else if(password == "" && password.length < 8){
         return `password is never OK`;
        }
        return false;
 }

console.log(passwordIsOk("laidobeats"));

module.exports = {password_is_valid, passwordIsOk}
   