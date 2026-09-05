

describe('Locators', () => {
    it("Different Locators", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("[placeholder='Username']").type("standard_user") // using placeholder attribute
        cy.get("#password").type("secret_sauce") // using class attribute
        cy.get("[name='login-button']").click() // using name attribute
    
        //cy.get('[data-test="title"]').should('have.text', 'Products')


       // cy.title().should('eq', 'Swag Labs') // using title
       // cy.title().should('include', 'Swag') // using title
      //  cy.title().should('contain', 'b') // using title

      // cy.title().should('eq', 'Swag Labs')
      // .should('include', 'Swag').should('contain', 'abs') // using title

      // cy.title().should('eq', 'Swag Labs')
      // .and('include', 'Swag').and('contain', 'Lab')


       // cy.title().should('not.contain', 'Swag1') // using title
       // cy.title().should('not.contain','Swag') // using title`

       cy.get('.app_logo').should('be.visible') 
       cy.get('[data-test="shopping-cart-link"]').should('be.visible') 
      cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible') 

      cy.get('#inventory_container').should('have.length', 6) 
    })  

})