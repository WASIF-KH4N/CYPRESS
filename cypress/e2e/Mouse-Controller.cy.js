describe("Mouse Controller Suite", () => {
    it("Mouse Hover", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get(".dropbtn").realHover()// Trigger mouseover event on the element
         cy.get(".dropdown-content a").should('be.visible') // Verify that the dropdown content is visible after mouse hover")

    })

    it.only("Right Click", () => {
        cy.visit("https://qaplayground.com/practice/buttons")
        cy.get("#rightClickBtn").rightclick() // Trigger right click event on the button
        cy.get("#result-s08").should("have.text","Context menu triggered!")

    })

    it("Double Click",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[ondblclick='myFunction1()']").dblclick() // Trigger double click event on the button
        cy.get("#field2").should('have.value', 'Hello World!') // Verify that the input field value is updated after double click
    })

    it("Drag and Drop",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#draggable").should('be.visible') // Verify that the draggable element is visible
        cy.get("#droppable").should('be.visible') // Verify that the droppable element is visible
        cy.get("#draggable").drag("#droppable",{force:true}) // Drag the element with id "draggable" and drop it on the element with id "droppable"
        cy.get("#droppable p").should("have.text", "Dropped!")
    })

    it("Scrolling",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#PageList1").scrollIntoView({duration: 3000}) // Scroll the element with class "widget-content" into view
        cy.get("#PageList1").should('be.visible')  // Verify that the element is visible after scrolling into view
        cy.get("#PageList1 h2").should('have.text', 'Footer Links') // Verify that the element has the expected text after scrolling into view

    })


})