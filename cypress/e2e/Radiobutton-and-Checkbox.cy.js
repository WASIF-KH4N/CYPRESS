

describe("Radio Button Practice",()=>{
    it("Radio Button",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
       // cy.get(".title").should("have.text","\nAutomation Testing Practice\n")
       cy.get('h1.title').should('have.text', '\nAutomation Testing Practice\n') //Multiple tag hain is wja se h1.title use kra
       

       cy.get("[value='male']").should("be.visible") // Male
       cy.get("[value='female']").should("be.visible") // Female

       cy.get("#male").check().should("be.checked") // Male
       cy.get("#female").should("not.be.checked") // Female

       cy.get("#female").check().should("be.checked") // Female
       cy.get("#male").should("not.be.checked") // Male
    })

    it("Checkbox",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#sunday").check().should("be.checked") // Sunday

       // cy.get("#monday").check().should("not.be.checked") error bcz monday check he nh xD

        cy.get("#sunday").uncheck().should("not.be.checked") // Sunday

        //cy.get("#sunday").should("not.be.checked") // wrong bcz sunday check he nh xD

       // cy.get(".form-check-input").check().should("be.checked") // Multiple check
       
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked") // Multiple uncheck

        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked") // First checkbox check
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked") // Last checkbox check

    })
})