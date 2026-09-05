
describe("Alert window practice",()=>{

    it("Simple Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("I am a JS Alert")
        })
       // cy.get("#result").should("contain","You successfully")
        cy.get("#result").should("have.text","You successfully clicked an alert")
        cy.get("#result").should("contain.text","You successfully")

    })

    it("Confirm Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("I am a JS Confirm")
        })

         
       //  cy.get("#result").should("have.text","You clicked: Ok")
      //  cy.get("#result").should("contain.text","You clicked:")


       cy.on("window:confirm",()=>false) // Click on Cancel button
       cy.get("#result").should("have.text","You clicked: Cancel")
            
    })

    it("Prompt Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Welcome to Cypress")
        })

        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get("#result").should("have.text","You entered: Welcome to Cypress")
    })

    it.only("Authentication Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth:{
                username:"admin",
                password:"admin"
            }
        })
        cy.get("p").should("contain.text","Congratulations! You")
      
    })   


})