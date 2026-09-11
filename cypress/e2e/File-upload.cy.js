import 'cypress-file-upload';

describe("File Upload Suite", () =>
     {
    it("Single File Upload ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet')
        cy.get("input#file-upload").attachFile("dart.pdf") // Attach a file to the input field
        cy.get("input#file-submit").click() // Click the submit button to upload the file

        //cy.get("div.example h3").should('have.text', 'File Uploaded!') // Verify that the file was uploaded successfully
        cy.get("h3").should('have.text', 'File Uploaded!') 

   })

    it("File Upload Rename ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet')
        cy.get("input#file-upload").attachFile({ filePath: "figma1.png", fileName: "figma2.png" }) // Attach a file to the input field with a new name
        cy.get("input#file-submit").click()  
        cy.get("h3").should('have.text', 'File Uploaded!') 
       
    }) 

    it("Drag and Drop File Upload ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet')     
        cy.get("#drag-drop-upload").attachFile("dart.pdf",{subjectType: 'drag-n-drop'}) // Attach a file to the input field using drag and drop
       // cy.get("#drag-drop-upload span").should('contain', 'dart.pdf') // Verify that the file was uploaded successfully
       cy.get("#drag-drop-upload [data-dz-name]").should("have.text", "dart.pdf")
       //cy.get("#drag-drop-upload span").should("have.text", "dart.pdf✔")

       cy.wait(5000)
    
    })

    it("Multiple File Upload ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq', 'The Internet') 
        cy.get("input#file-upload").attachFile(["dart.pdf", "figma1.png"]) // Attach multiple files to the input field
        cy.get("input#file-submit").click()  
        cy.get("h3").should('have.text', 'File Uploaded!')  

    })

    // Differnt website for multiple file upload
    it("Multiple File Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.title().should('eq', 'Multiple File Upload Input Example')
        cy.get("input#filesToUpload").attachFile(["dart.pdf", "figma1.png"]) // Attach multiple files to the input field
       
        cy.get("ul#fileList li").eq(0).should('have.text', 'dart.pdf') // Verify that the files were uploaded successfully
        cy.get("ul#fileList li").should('contain.text', 'figma1.png') 
    
    })

    it.only("File Upload - Shadow DOM", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.title().should('eq', 'File Upload Shadow DOM')
        cy.get(".smart-browse-input",{includeShadowDom: true}).attachFile("dart.pdf") // Attach a file to the input field inside the shadow DOM
        
        cy.get(".smart-item-name",{includeShadowDom: true}).should('have.text', 'dart.pdf') // Verify that the file was uploaded successfully
    })   

    

})