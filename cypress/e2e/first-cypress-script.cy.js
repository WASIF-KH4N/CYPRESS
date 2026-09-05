   /* describe('Sauce Demo Test', () => {

    it('Login and add product to cart', () => {

        // Open Sauce Demo
        cy.visit('https://www.saucedemo.com/')

        // Enter username
        cy.get('[data-test="username"]')
            .type('standard_user')

        // Enter password
        cy.get('[data-test="password"]')
            .type('secret_sauce')

        // Click Login
        cy.get('[data-test="login-button"]')
            .click()

        // Verify Products page
        cy.get('.title')
            .should('have.text', 'Products')

        // Add product to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()

        // Verify cart has 1 item
        cy.get('.shopping_cart_badge')
            .should('have.text', '1')

    })

})  */

    describe('My First Test', () => {
        it('Incorrect Username and Incorrect Password', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[type="text"]').type('standard_user1')
            cy.get('[type="password"]').type('secret_sauce1')
            cy.get('[type="submit"]').click()
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
        })

         it('Correct Username and Incorrect Password', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[type="text"]').type('standard_user')
            cy.get('[type="password"]').type('secret_sauce1')
            cy.get('[type="submit"]').click()
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
        })

         it('Incorrect Username and Correct Password', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[type="text"]').type('standard_user1')
            cy.get('[type="password"]').type('secret_sauce')
            cy.get('[type="submit"]').click()
            // cy.get('.title').should('have.text', 'Products')
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
         })

         it('Correct Username and Correct Password', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[type="text"]').type('standard_user')
            cy.get('[type="password"]').type('secret_sauce')
            cy.get('[type="submit"]').click()
            cy.get('.title').should('have.text', 'Products')
        })
    })