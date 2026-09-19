class Login{
    Username(username){
        cy.get('#user-name').type(username)
    }
    Password(password){
        cy.get('#password').type(password)
    }
    clickLogin(){
        cy.get('input[type="submit"]').click()
    }

    HomePage(){
        cy.get("span.title").should('have.text', 'Products')
        
    }

    ErrorMessage(){
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    }
    
}
export default Login