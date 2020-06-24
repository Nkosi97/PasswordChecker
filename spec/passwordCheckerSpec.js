const password_is_valid = require("../src/password_Checker")
let password = password_is_valid.password_is_valid
//password_is_valid
describe("password is valid function", () => {
  it(`should return password is Valid`, () => {
    expect(password("")).toBe(`password shoud exist`)
  });
  it(`should return password is Valid`, () => {
    expect(password("2")).toBe(`password shoud have eight characters`)
  });
  it(`should return password is Valid`, () => {
    expect(password("lkjuhgyf")).toBe(`password shoud atleast have one upper character`)
  });
  it(`should return password is Valid`, () => {
    expect(password("l*dobeatS")).toBe(`password shoud atleast have one special character`)
  });
  it(`should return password is Valid`, () => {
    expect(password("Lavis@97")).toBe(`password is valid!`)
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