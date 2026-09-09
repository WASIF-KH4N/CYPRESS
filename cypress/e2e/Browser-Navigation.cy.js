describe('Browser Navigation', () => {
    it('Navigation', () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')

        cy.get('a[href="/products"]').click()
        cy.get("input#search_product").should('have.attr', 'placeholder', 'Search Product')

        cy.go('back') // Go back to the previous page
        cy.title().should('eq', 'Automation Exercise')

        cy.go('forward') // Go forward to the next page
        cy.get("input#search_product").should('have.attr', 'placeholder', 'Search Product')  

        cy.reload() // Reload the current page
        cy.get("input#search_product").should('have.attr', 'placeholder', 'Search Product')

        cy.go(-1) // Go back to the previous page
        cy.title().should('eq', 'Automation Exercise')

        cy.go(1) // Go forward to the next page
        cy.get("input#search_product").should('have.attr', 'placeholder', 'Search Product')
    })
})