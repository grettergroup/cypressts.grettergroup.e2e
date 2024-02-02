
import {Given, When, Then, After, AfterStep} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pages/login/login.page";
import dashboardPage from "../../../pages/dashboard/dashboard.page";


Given("O usuário navega para a tela de autenticação", () => {
    loginPage.acessaeSocial();
})

When("informa o usuário, senha e clica em acessar", ()=> {
    loginPage.insereUsuarioSenha();
})

When("clica no campo select e seleciona a fonte de dados", () => {
    dashboardPage.selecionarBaseDeDados();
})

Then("logo, o usuário está autenticado no eSocial", () =>{
    dashboardPage.verificaUsuarioAutenticado();
})


//Scenario 2
When("clica no campo usuário e senha, mas não informa nenhum valor", () =>{
    loginPage.clicaInputUsuarioSenha();
})

Then("Logo, visualiza as mensagens Usuário é requerido, Senha é requerido e botão acessar bloqueado", () =>{
    loginPage.verificaMensagensValidacao();
}) 

//Scenario 3
When("informa usuário e senha incorreto", () =>{
    loginPage.insereUsuarioSenhaIncorreto();
})

Then("Logo, visualiza uma modal com uma mensagem - Usuário não encontrado ou senha inválida!", () =>{
    loginPage.verificaMensagemUsuarioSenhaInvalidos();
})