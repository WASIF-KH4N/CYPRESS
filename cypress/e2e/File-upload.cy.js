import 'cypress-file-upload';

describe("File Upload Suite", () => {
    it("Single File Upload ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet')
        cy.get("input#file-upload").attachFile("figma1.png") // Attach a file to the input field
        cy.get("input#file-submit").click() // Click the submit button to upload the file

        //cy.get("div.example h3").should('have.text', 'File Uploaded!') // Verify that the file was uploaded successfully
        cy.get("h3").should('have.text', 'File Uploaded!') // Verify that the file was uploaded successfully


    })

    it.only("File Upload Rename ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet')
        cy.get("input#file-upload").attachFile({ filePath: "figma1.png", fileName: "figma2.png" }) // Attach a file to the input field with a new name
        cy.get("input#file-submit").click() // Click the submit button to upload the file 
        cy.get("h3").should('have.text', 'File Uploaded!') // Verify that the file was uploaded successfully
        }) 

})