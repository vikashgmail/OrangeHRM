const MyInfolocator=require('../Page elements/MyInfopageelement.json')
class myInfoaction{
    clickonMyInfo(){
        cy.get(MyInfolocator.MyInfo).click()

    }
    fillfirstName(){
        cy.get(MyInfolocator.firstName).click()
    }
    fillMiddleName(){
        cy.get(MyInfolocator.middleName).click
    }
    filllastName(){
        cy.get(MyInfolocator.lastName).click()
    }
    clickonsave(){
        cy.get(MyInfolocator.save).click()
    }
}
export default myInfoaction