import Login from "../PageObject/Login.js"

describe('Login Suite', function(){
   
    it('Incorrect Login Test', function(){
    cy.visit('https://www.saucedemo.com/')
    const login = new Login()   
    login.Username('standarduser')
    login.Password('secret_sauce')
    login.clickLogin()
    login.ErrorMessage()
   
  })

  it('Correct Login Test', function(){
    cy.visit('https://www.saucedemo.com/')
    const login = new Login()   
    login.Username('standard_user')
    login.Password('secret_sauce')
    login.clickLogin()
    login.HomePage()
            
  })
})