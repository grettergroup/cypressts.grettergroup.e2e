import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que o usuário acessa o site translate.google', () => {
    cy.visit('/')
})

When('o usuário visualiza um parabéns', () => {
    return true
})

Then('o usuário fica feliz', () => {
    return true
}) 
