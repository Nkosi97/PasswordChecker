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
   const passArr = [!password.match(/[A-Z]/g), password.length < 8, !password.match(/[a-z]/g)];
   for(let i = 0; i < passArr.length; i++){
       if(passArr[i] == password){
           return true;
       }else if(passArr[1] || passArr[2] == password){
        return true;
       }
       return false;
   }
 }

module.exports = {password_is_valid, passwordIsOk}
   