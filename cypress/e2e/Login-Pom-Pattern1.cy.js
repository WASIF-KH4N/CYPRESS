import LoginApproch from "../PageObject/LoginApproch.js"
import logindata from "../fixtures/logindata.json"

describe('Login Suite', function(){
    let login
    let loginData

    before(() => {
        cy.fixture('loginData').then((data) => {
            loginData = data
        })
    })
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        login = new LoginApproch()

    })
   
    it('Incorrect Login Test', function(){  
    login.setUsername(logindata.invalidUser.Username)
    login.setPassword(logindata.invalidUser.Password)
    login.clickLogin()
    login.verifyErrorMessage()
   
  })

  it('Correct Login Test', function(){  
    login.setUsername(logindata.validUser.Username)
    login.setPassword(logindata.validUser.Password)
    login.clickLogin()
    login.verifyHomePage()
            
  })
})