function passwordIsValid(password) {

    try {
        if (password == "") throw `password should exist`
        if (password.length < 8) throw `password should at least have 8 characters`
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
   var conditions = 0 
   const passArr = 
   [password !== "",password.match(/[A-Z]/g),
    password.length > 8, password.match(/[a-z]/g),
    password.match(/\d/g),password.match(/\W/g)];
   for(let i = 0; i < passArr.length; i++){
       if(passArr[i]){
            conditions++
       }if(passArr[0] && passArr[2] !== true){
        return `password is never OK`;
       }
        if(conditions >= 3){
            return true
        }
   }
   return false;
 }

module.exports = {passwordIsValid, passwordIsOk}
   