import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/google/home.page';

//Scenario: Acessar o site do google e realizar pesquisa
Given('o usuário acessa o site do google', () => {
    homePage.acessarSiteGoogle()
}) 

When('digita o texto desejado', () => {
    homePage.preencherPesquisa()
}) 

Then('visuaiza uma lista de artigos sobre o assunto pesquisado', () => {
    return true
}) 