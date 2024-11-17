

const PIMlocator=require('../Page elements/PIMpageelements.json')
class PIMpageaction{
    clickonPIM(){
        cy.get(PIMlocator.PIM).click()
    }
    clickonaddEmployee(){
        cy.get(PIMlocator.addEmployee).eq(2).click()
    }
    fillfirstName(firstName){
        cy.get(PIMlocator.firstName).type(firstName)
    }
    filllastName(lastName){
        cy.get(PIMlocator.lastName).type(lastName)
    }
    clickonsave(){
        cy.get(PIMlocator.save).click()
    }
    clickonemployeeList(){
        cy.get(PIMlocator.employeeList).eq(1).click()
    }
    fillemployeeName(Name){
        cy.get(PIMlocator.EmployeeName).eq(0).type(Name)

    }
    clickonsearch(){
        cy.get(PIMlocator.search).click()
    }
    clickonsearchresult(){
        cy.get(PIMlocator.searchresult).eq(0).click()
    }
    verifysearchemployeeName(empName){
        cy.contains(empName).should('be.visible')
    }


}
export default PIMpageaction