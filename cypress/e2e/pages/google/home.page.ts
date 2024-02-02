import { elements } from "./elements"

export default new class GooglePage{
    acessarSiteGoogle(){
        cy.visit('/')
    }
    preencherPesquisa(){
        cy.get(elements.inputPesquisar).should('be.visible').type('How to create a cypress project using cucumber and typescript?')
        cy.get(elements.btnPesquisarGoogle).click()
    }
}