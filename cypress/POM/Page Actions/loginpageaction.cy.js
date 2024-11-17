const loginlocators=require("../Page elements/Loginpageelements.json")

class Loginpageaction{
    visitloginpage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    FilluserName(username){
        cy.get(loginlocators.loginPageLocators.username).type(username)

    }
    fillPassword(password){
        cy.get(loginlocators.loginPageLocators.password).type(password)
    }
    clickLogin(){
        cy.get(loginlocators.loginPageLocators.login).click() 
    }
}
export default Loginpageaction;