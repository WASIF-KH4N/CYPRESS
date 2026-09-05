
describe('Sauce Demo - Complete Shopping Flow', () => {

    it('Login, buy a product and complete checkout', () => {

        // 1. Open website
        cy.visit('https://www.saucedemo.com/')

        // 2. Login
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // 3. Verify Products page
        cy.get('.title').should('have.text', 'Products')

        // 4. Sort products by price: Low to High
        cy.get('[data-test="product-sort-container"]')
            .select('lohi')

        // 5. Add cheapest product to cart
        cy.get('[data-test^="add-to-cart"]').first().click()

        // 6. Verify cart count
        cy.get('.shopping_cart_badge')
            .should('have.text', '1')

        // 7. Open cart
        cy.get('.shopping_cart_link').click()

        // 8. Verify cart page
        cy.get('.title').should('have.text', 'Your Cart')

        // 9. Checkout
        cy.get('[data-test="checkout"]').click()

        // 10. Enter customer information
        cy.get('[data-test="firstName"]').type('Wasif')
        cy.get('[data-test="lastName"]').type('Khan')
        cy.get('[data-test="postalCode"]').type('74000')

        // 11. Continue
        cy.get('[data-test="continue"]').click()

        // 12. Verify checkout overview
        cy.get('.title').should('have.text', 'Checkout: Overview')

        // 13. Finish order
        cy.get('[data-test="finish"]').click()

        // 14. Verify successful order
        cy.get('.complete-header')
            .should('have.text', 'Thank you for your order!')

    })

})

