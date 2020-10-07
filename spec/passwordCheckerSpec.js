const passwordIsValid = require("../src/password_Checker")
let password = passwordIsValid.passwordIsValid

const passwordIsOk = require("../src/password_Checker")
let passOk = passwordIsOk.passwordIsOk

describe("password is valid", function() {
    it( "it should throw an error", function(){
      expect(() => {password = passwordIsValid.passwordIsValid
    ('').toThrow("Password shoul exist")})
    })  
  
    describe("password is valid", function() {
      it( "it should test if password is longer than 8 characters", function(){
        expect(() => {password('Laido').toThrow("password should be longer than 8 characters")})
      })
    }); 
  
      describe("password is valid", function() {
        it( "it should test if the password has at least one lowercase letter", function(){
          expect(() => {password('THANDOO').toThrow("password should have at least one lowercase letter")})
        })
      });  
  
   describe("password is valid", function() {
    it( "it should test if the password has at least one uppercase letter", function(){
      expect(() => {password('lukhanyo').toThrow("password should have at least one uppercase letter")})
    })
  });  
  
  describe("password is valid", function() {
    it( "it should test if the password has at least one digit", function(){
      expect(() => {password('Lethabo').toThrow("password should  at least have  one digit")})
    })
  }); 
  
  describe("password is valid", function() {
    it( "it should test if the password has at least one special character", function(){
      expect(() => {password('Luthando').toThrow("password should have at least one special character")})
    })
  });  
  
  describe("password is ok", function() {
    it( "it should test if the password meets all the requirements", function(){
      expect(() => {password('Lukhanyo#@2').toThrow("password is valid")})
    })
  }); 

describe("password is ok function", () => {
  it(`should return true`, () => {
    expect(passOk("laidobeats")).toBe(false)
  });
  it(`should return false`, () => {
    expect(passOk("l")).toBe(true)
  });
  it(`should return password is never OK`, () => {
    expect(passOk("vvj")).toBe(true)
  });
});
}); 

