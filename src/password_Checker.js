function passwordIsValid(password) {
  try {
    if (password == "") throw `password should exist`;
    if (password.length < 8) throw `password should at least have 8 characters`;
    if (!password.match(/[a-z]/g))
      throw `password should have one lower character`;
    if (!password.match(/[A-Z]/g))
      throw `password should have uppercase letters`;
    if (!password.match(/\W/g))
      throw `password should have atleast one special character`;
    if (!password.match(/[0-9]/g))
      throw `password should have atleast one number`;
    if (!password.match(/\s/g))
      throw `password should at least have one whitespace character`;

    return `password is valid!`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return password;
}

function passwordStrength(password) {
  let conditions = 0;

  if (password != "") {
    conditions = conditions + 1;
  }

  if (password.length >= 8) {
    conditions = conditions + 1;
  }

  if (password.match(/[a-z]/g)) {
    conditions = conditions + 1;
  }

  if (password.match(/[A-Z]/g)) {
    conditions = conditions + 1;
  }
  if (password.match(/\W/g) && password.match(/\s/g)) {
    conditions = conditions + 1;
  }
  if (password.match(/[0-9]/g)) {
    conditions = conditions + 1;
  }

  if (conditions >= 6) {
    return "strong";
  } else if (conditions >= 4) {
    return "medium";
  } else if (conditions >= 3) {
    return "weak";
  } else {
    return "invalid";
  }
}

module.exports = { passwordIsValid, passwordStrength };
