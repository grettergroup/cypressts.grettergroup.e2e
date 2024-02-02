
import { elements }  from './elements';

class DashboardPage {
    
    selecionarBaseDeDados(){
        cy.get(elements.selectOrigemDados && elements.placeholderOrigemDados).should('exist').should('be.visible').click()
        cy.get('mat-option span').contains('TESTAUT').should('exist').click()
        cy.get(elements.botaoConfirmar).click()
        //teste acesso DB
        //cy.commandResetDB()       
    }

    verificaUsuarioAutenticado(){
        cy.get(elements.selectSdkBases).should('be.visible')
    }

    clicaMenuPerfilUsuario(){
        cy.get(elements.menuPerfilUsuario).should("be.visible")
        cy.get(elements.menuPerfilUsuario).click()
    }

    clicaItemMenuSair(){
        cy.get(elements.itemPerfilUsuarioSair).click();
    }


}
export default new DashboardPage();