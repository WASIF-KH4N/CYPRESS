
describe("Screenshots and Videos Suite", () => {
    it("Capture Screenshot-Intentionally", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq', 'Automation Testing Practice')

       cy.screenshot() // Capture a screenshot of the entire page

       cy.get("select#colors").screenshot("colors") // Capture a screenshot of a specific element

       cy.get("a[href='https://testautomationpractice.blogspot.com/p/playwrightpractice.html']").click()// Capture a screenshot of a specific element

       cy.get("[itemprop='name']").should('have.text', '\nPlaywrightPractice\n')

       cy.get("img[alt='logo image']").screenshot("Playwright logo") // Capture a screenshot of a specific element


    })
     it("Capture Auto Screenshots and Videos", () => {
           cy.visit("https://testautomationpractice.blogspot.com/")
           cy.title().should('eq', 'Automation Testing Practice')

       cy.get("a[href='https://testautomationpractice.blogspot.com/p/playwrightpractice.html']").click()// Capture a screenshot of a specific element

       cy.get("[itemprop='name']").should('have.text', '\nPlaywright\n')


    })
})

   

