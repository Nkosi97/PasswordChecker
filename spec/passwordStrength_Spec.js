const { passwordStrength } = require("../src/password_Checker");


describe("passwordStrength function", () => {
  it(`should return strong if number of conditions met >= 6`, () => {
    expect(passwordStrength("L @idobeats75")).toBe(`strong`)
  });

  it(`should return medium if number of conditions met >= 4`, () => {
    expect(passwordStrength("L@idobeats")).toBe(`medium`)
  });

  it(`should return weak if number of conditions met >= 3`, () => {
    expect(passwordStrength("Lido")).toBe(`weak`)
  });

  it(`should return invalid if conditions 1 or 2 are not met`, () => {
    expect(passwordStrength("")).toBe(`invalid`)
    expect(passwordStrength("2016")).toBe(`invalid`)
  });

});



