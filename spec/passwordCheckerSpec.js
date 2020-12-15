const myTest = require("../src/password_Checker")
let password = myTest.passwordIsValid
let passOk = myTest.passwordIsOk

describe("password is valid function", () => {
  it(`should should exist`, () => {
    expect(() => {password('').toThrow("Password should exist")});
    });

  it( "should be longer than 8 characters", function(){
    expect(() => {password('Laido').toThrow("password should be longer than 8 characters")})
    })

  it( "should have at least one lowercase letter", function(){
    expect(() => {password('THANDOO').toThrow("password should have at least one lowercase letter")})
    })

  it( "should have at least one uppercase letter", function(){
    expect(() => {password('lukhanyo').toThrow("password should have at least one uppercase letter")})
    })

  it( "should have at least one digit", function(){
    expect(() => {password('Lethabo').toThrow("password should  at least have  one digit")})
    })

  it( "should have at least one special character", function(){
    expect(() => {password('Luthando').toThrow("password should have at least one special character")})
    })

  it( "should meet all the requirements", function(){
    expect(() => {password('Lukhanyo#@2').toThrow("password is valid")})
    })

}); 

describe("password is ok function", () => {
  it(`should return true`, () => {
    expect(passOk("Lavisac#19")).toBe(true)
  });

  it(`should return false`, () => {
    expect(passOk("")).toBe(false)
  });

  it(`should return password is never OK`, () => {
    expect(passOk("Lavisac")).toBe(`password is never OK`)
  });

});



