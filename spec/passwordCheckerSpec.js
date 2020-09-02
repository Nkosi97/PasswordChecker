const password_is_valid = require("../src/password_Checker")
let password = password_is_valid.password_is_valid

const passwordIsOk = require("../src/password_Checker")
let passOk = passwordIsOk.passwordIsOk
//password_is_valid

describe("password is valid function", () => {
  it(`should throw password is not Valid`, () => {
    expect(password("")).toBe("")
  });
  it(`should throw password is not Valid`, () => {
    expect(password("2")).toBe("2")
  });
  it(`should throw password is not Valid`, () => {

    expect(password("Lkjuhgyf")).toBe("Lkjuhgyf")
  });
  it(`should throw password is not Valid`, () => {
    expect(password("l*dobeatZ")).toBe("l*dobeatZ")
  });
 
  it(`should return password is Valid`, () => {
    expect(password("Lavis@97")).toBe("password is valid!")
  });
 
});

describe("password is ok function", () => {
  it(`should return true`, () => {
    expect(passOk("laidobeats")).toBe(true)
  });
  it(`should return false`, () => {
    expect(passOk("l")).toBe(false)
  });
  it(`should return password is never OK`, () => {
    expect(passOk("")).toBe("password is never OK")
  });
  
});
