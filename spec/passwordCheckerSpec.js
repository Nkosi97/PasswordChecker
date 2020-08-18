const password_is_valid = require("../src/password_Checker")
let password = password_is_valid.password_is_valid
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
    expect(password("l*dobeatS")).toBe("l*dobeatS")
  });
 
  it(`should return password is Valid`, () => {
    expect(password("Lavis@97")).toBe("password is valid!")
  });
 
});

//passwordIsOkay
// describe("password is ok function", () => {
//   it(`should return password is Ok`, () => {
//     expect(passwordIsOkay("")).toThrow("password is not okay!");
//   });
//   it(`should return password is ok`, () => {
//     expect(passwordIsOkay("s")).toThrow("password is not okay!");
//   });
//   it(`should return password is ok`, () => {
//     expect(passwordIsOkay("laidobeats")).toThrow("password is not okay!");
//   });
//   it(`should return password is ok`, () => {
//     expect(passwordIsOkay("Laidobeats")).toThrow("password is not okay!");
//   });
//   it(`should return password is ok`, () => {
//     expect(passwordIsOkay("L@idobeats")).toThrow("password is not okay!");
//   });
//   it(`should return password is `, () => {
//     expect(passwordIsOkay("L@id0beats97")).toBe("password is okay!")
//   });
// });