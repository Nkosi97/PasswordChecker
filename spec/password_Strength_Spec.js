const { passwordStrength } = require("../src/password_Checker");


describe("passwordStrength function", () => {
  it(`should return strong`, () => {
    expect(passwordStrength("L@idobeats75")).toBe(`strong`)
  });

  it(`should return medium`, () => {
    expect(passwordStrength("L@idobeats")).toBe(`medium`)
  });

  it(`should return weak`, () => {
    expect(passwordStrength("Lido")).toBe(`weak`)
  });

  it(`should return invalid`, () => {
    expect(passwordStrength("")).toBe(`invalid`)
    expect(passwordStrength("2016")).toBe(`invalid`)
  });

});



