import { elements } from "./elements";
import acesso from '../../../fixtures/usuarios.json';

class LoginPage {

    acessaeSocial(){
        cy.visit('/')
    }

    insereUsuarioSenha(){
        this.verificaTelaLoginCarregada()
        cy.get(elements.usuario).type(acesso.master.usuario, {log : false})
        cy.get(elements.senha).type(acesso.master.senha, {log : false})
        cy.get(elements.btnAcessar).click()
    }  

    logarEsocial(){ //skipLogin = false
        // if(skipLogin){
        //     cy.commandGetItenLocalStorage('token').then((token) => {
        //         cy.log('GLOBAL COMMAND' , token)
        //         if(token === null) {
        //             cy.commandRequestAutenticar()
        //         }  
        //     }) 
        //     cy.visit('/s2200')     
        // }
        // else{
            this.acessaeSocial()
            this.insereUsuarioSenha()    
        // }
    }

    verificaTelaLoginCarregada(){
        cy.get(elements.imagemEsocial).should("be.visible")
    }

    insereUsuarioSenhaIncorreto(){
        this.verificaTelaLoginCarregada()
        cy.get(elements.usuario).type("112233")
        cy.get(elements.senha).type("QAsenhaTeste123")
        cy.get(elements.btnAcessar).click()
    }
    
    clicaInputUsuarioSenha(){
        cy.get(elements.usuario).click()
        cy.get(elements.senha).click()
        cy.get(elements.imagemEsocial).click()
    }

    verificaMensagensValidacao(){
        cy.contains(elements.msgUsuario)
        cy.contains(elements.msgSenha)
    }

    verificaMensagemUsuarioSenhaInvalidos(){
        cy.contains(elements.msgUsuarioSenhaInvalidos).should('be.visible')
        cy.get(elements.btnModalOk).click()
    }
}
export default new LoginPage();