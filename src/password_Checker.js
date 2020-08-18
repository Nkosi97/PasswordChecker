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

// console.log(password_is_valid("Lavis@97"));
console.log(password_is_valid("Lavisa@88"));

function passwordIsOk(password) {

    try {
        if (password == "") throw `password is not okay!`
        if (password.length < 8) throw `password is not okay!`
        if (password.match(/[a-z]/g)) throw `password is not okay!`
        if (password.match(/[A-Z]/g)) throw `password is not okay!`
        if (password.match(/[{(!@#$%^&*.,\')}]/g)) throw `password is not okay!`
        if (password.match(/[0-9]/g)) throw `password is not okay!`

        return `password is okay!`;
    } catch (error) {
        console.error(`${error}`)
    }
    return password
 }

// console.log(passwordIsOk("laido"));


module.exports = {password_is_valid, passwordIsOk}
   