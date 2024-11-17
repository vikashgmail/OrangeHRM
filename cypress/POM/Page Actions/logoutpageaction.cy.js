const logoutlocator=require('../Page elements/logoutpageelements.json')

class logout{
    clickonlogout(){
        cy.get(logoutlocator.profile).click()
        cy.get(logoutlocator.logout).click()
    }
}
export default logout