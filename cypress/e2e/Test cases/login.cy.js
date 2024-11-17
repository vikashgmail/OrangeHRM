
import Loginpageaction from "../../POM/Page Actions/loginpageaction.cy";
import Logoutpageaction from "../../POM/Page Actions/logoutpageaction.cy";
import PIMpageaction from "../../POM/Page Actions/PIMpageaction.cy";
import MyInfopageaction from "../../POM/Page Actions/MyInfopageaction.cy";

const loginaction=new Loginpageaction();
const logoutaction=new Logoutpageaction();
const PIMaction=new PIMpageaction();
const Myinfoaction=new MyInfopageaction();

/// <reference types="cypress"/>
describe('Page object ', () => {
    beforeEach(() => {
        loginaction.visitloginpage()
        loginaction.FilluserName('Admin')
        loginaction.fillPassword('admin123')
        loginaction.clickLogin()
        
    });
   
    it('addEmployee', () => {
        PIMaction.clickonPIM()
        PIMaction.clickonaddEmployee()
        PIMaction.fillfirstName("sonu")
        PIMaction.filllastName("sood")
        PIMaction.clickonsave()

        
    });
    it('searchEmployee', () => {
        PIMaction.clickonPIM()
        PIMaction.clickonemployeeList()
        PIMaction.fillemployeeName("sonu sood")
        cy.wait(6000)
        PIMaction.clickonsearch()
        PIMaction.clickonsearchresult()
        PIMaction.verifysearchemployeeName("sonu sood")
        
    });
    it('MYInfo', () => {
        Myinfoaction.clickonMyInfo()
        Myinfoaction.fillfirstName("shiva")
        Myinfoaction.fillMiddleName("kumar")
        Myinfoaction.filllastName("singh")
        Myinfoaction.clickonsave()
        
    });
   
    after(() => {
        logoutaction.clickonlogout()

    });
    
});