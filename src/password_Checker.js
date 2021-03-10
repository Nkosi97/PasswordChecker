const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "./logs/error.log" }),
  ],
});

function passwordIsValid(password) {
  try {
    if (password == "") {
      logger.error("password should exist");
      throw `password should exist`;
    }
    if (password.length < 8) {
      logger.error("password should at least have 8 characters");
      throw `password should at least have 8 characters`;
    }
    if (!password.match(/[a-z]/g)) {
      logger.error("password should have one lower character");
      throw `password should have one lower character`;
    }
    if (!password.match(/[A-Z]/g)) {
      logger.error("password should have uppercase letters");
      throw `password should have uppercase letters`;
    }
    if (!password.match(/\W/g)) {
      logger.error("password should have atleast one special character");
      throw `password should have atleast one special character`;
    }
    if (!password.match(/[0-9]/g)) {
      logger.error("password should have atleast one number");
      throw `password should have atleast one number`;
    }
    if (!password.match(/\s/g)) {
      logger.error("password should at least have one whitespace character");
      throw `password should at least have one whitespace character`;
    }
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
