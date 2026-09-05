
describe("Dropdown Practice",()=>{
    it.skip("Dropdown",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("select.form-control[id='country']").select("Germany").should("have.value","germany") // Select Pakistan


    })

    it.skip("Bootstrap Dropdown",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/",
         { timeout: 120000 })
        cy.get("#select2-reasondummy-container").click()
        cy.get(".select2-search__field").type("Car rental").type("{enter}") // Select Visa extension
        cy.get("#select2-reasondummy-container").should("contain.text","Car rental") // Verify selected value

    })

    it("Auto suggestion Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Pakistan")
        cy.get(".suggestion-title").contains("Pakistan Tehreek-e-Insaf").click() // Click on the suggestion
       
        
    })

})