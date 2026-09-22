class LoginApproch {

    textusername = '#user-name';
    textpassword = '#password';
    loginButton = 'input[type="submit"]';
    error = '[data-test="error"]';
    home = 'span.title';

    setUsername(username) {
        cy.get(this.textusername).type(username);
    }

    setPassword(password) {
        cy.get(this.textpassword).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    verifyErrorMessage() {
        cy.get(this.error)
            .should('contain', 'Username and password do not match');
    }

    verifyHomePage() {
        cy.get(this.home)
            .should('have.text', 'Products');
    }
}

export default LoginApproch;