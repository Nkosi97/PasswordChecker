const { passwordIsValid } = require("../src/password_Checker");

describe("password is valid function", () => {
  it(`should should exist`, () => {
    expect(() => {passwordIsValid('').toThrow("Password should exist")});
    });

  it( "should be longer than 8 characters", function(){
    expect(() => {passwordIsValid('Laido').toThrow("password should be longer than 8 characters")})
    })

  it( "should have at least one lowercase letter", function(){
    expect(() => {passwordIsValid('THANDOO').toThrow("password should have at least one lowercase letter")})
    })

  it( "should have at least one uppercase letter", function(){
    expect(() => {passwordIsValid('lukhanyo').toThrow("password should have at least one uppercase letter")})
    })

  it( "should have at least one digit", function(){
    expect(() => {passwordIsValid('Lethabo').toThrow("password should  at least have  one digit")})
    })

  it( "should have at least one special character", function(){
    expect(() => {passwordIsValid('Luthando').toThrow("password should have at least one special character")})
    })

  it("should check if password has at least one whitespace character", function () {
     expect(() => {passwordIsValid('Lukhanyo#@2').toThrow("password should at least have one whitespace character")})
    })

  it( "should meet all the requirements", function(){
    expect(() => {passwordIsValid('Lukhanyo# @2').toThrow("password is valid")})
    })
 
}); 

